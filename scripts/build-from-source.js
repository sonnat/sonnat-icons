const fse = require("fs-extra");
const globAsync = require("fast-glob");
const rimraf = require("rimraf");
const Mustache = require("mustache");
const path = require("path");
const yargs = require("yargs");

const packagePath = process.cwd();

const outDirs = {
  svgIcons: path.resolve(packagePath, "src"),
  svgPaths: path.resolve(packagePath, "src/paths")
};

/**
 * @param {string} string
 * @param {string | RegExp} splitRegex
 * @returns {string}
 */
function toPascalCase(string, splitRegex) {
  const baseCase = string.split(splitRegex);

  return baseCase
    .map(part => part.charAt(0).toUpperCase() + part.substring(1))
    .join("");
}

/**
 * @param {string} data
 * @returns {string}
 */
function cleanPaths(data) {
  // Extract the paths from the svg string
  // Clean xml paths
  const paths = data
    .replace(/<svg[^>]*>/g, "")
    .replace(/<\/svg>/g, "")
    .replace(/"\/>/g, '" />')
    .replace(/ fill=".+?"/g, "")
    .replace(/ fill-opacity=".+?"/g, "")
    .replace(/xlink:href=/g, "xlinkHref=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/ clip-path=".+?"/g, "") // Fix visibility issue and save some bytes.
    .replace(/<clipPath.+?<\/clipPath>/g, ""); // Remove unused definitions

  const trimedPaths = paths.trim();

  return (trimedPaths.match(/\/>/g) || []).length > 1
    ? `<>${trimedPaths}</>`
    : trimedPaths;
}

/**
 * @param {string} svgPath
 * @param {{svgIcon: string; svgPaths: string}} template
 */
async function generateModules(svgPath, template) {
  const normalizedSvgPath = path.normalize(svgPath);
  const svgPathObj = path.parse(normalizedSvgPath);

  await fse.ensureDir(outDirs.svgPaths);
  await fse.ensureDir(outDirs.svgIcons);

  const data = await fse.readFile(svgPath, { encoding: "utf8" });
  const paths = cleanPaths(data);

  const name = toPascalCase(svgPathObj.name, "-");

  const pathsModuleString = Mustache.render(template.svgPaths, { paths });
  const iconModuleString = Mustache.render(template.svgIcon, { name });

  const indexString = `export { default as ${name} } from "./${name}";\n`;

  const pathsModuleDestPath = path.join(outDirs.svgPaths, `${name}.tsx`);
  const pathsIndexDestPath = path.join(outDirs.svgPaths, "index.ts");
  const iconModuleDestPath = path.join(outDirs.svgIcons, `${name}.tsx`);
  const iconIndexDestPath = path.join(outDirs.svgIcons, "index.ts");

  await fse.writeFile(pathsModuleDestPath, pathsModuleString);
  await fse.appendFile(pathsIndexDestPath, indexString);
  await fse.writeFile(iconModuleDestPath, iconModuleString);
  await fse.appendFile(iconIndexDestPath, indexString);
}

const run = async argv => {
  const { srcDir } = argv;

  if (!srcDir || !srcDir.length) return;

  // Clean old files
  rimraf.sync(`${outDirs.svgPaths}/index.ts`);
  rimraf.sync(`${outDirs.svgPaths}/*.tsx`);
  rimraf.sync(`${outDirs.svgIcons}/index.ts`);
  rimraf.sync(`${outDirs.svgIcons}/*.tsx`);

  await fse.ensureDir(outDirs.svgPaths);
  await fse.ensureDir(outDirs.svgIcons);

  const svgPaths = await globAsync(path.join(srcDir, "**/*.svg"));

  if (!svgPaths || !svgPaths.length) return;

  const template = {
    svgIcon: await fse.readFile(path.join(packagePath, "templates/svgIcon"), {
      encoding: "utf8"
    }),
    svgPaths: await fse.readFile(path.join(packagePath, "templates/svgPaths"), {
      encoding: "utf8"
    })
  };

  await fse.ensureFile(path.join(outDirs.svgPaths, "index.ts"));
  await fse.ensureFile(path.join(outDirs.svgIcons, "index.ts"));

  await Promise.all([
    svgPaths.map(svgPath => generateModules(svgPath, template))
  ]);
};

yargs
  .command({
    command: "$0 <srcDir>",
    description: "Build jsx components from svgs.",
    handler: run,
    builder: command => {
      return command.positional("srcDir", {
        description: "The source directory to look for `.svg` files.",
        type: "string"
      });
    }
  })
  .help()
  .strict(true)
  .version(false)
  .parse();

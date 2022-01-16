// eslint-disable-next-line @typescript-eslint/ban-types
type EmptyIntersectionObject = {};

type Overwrite<T, U> = Omit<T, keyof U> & U;

type MergeElementProps<
  T extends import("react").ElementType,
  P = EmptyIntersectionObject
> = Overwrite<import("react").ComponentPropsWithRef<T>, P>;

export interface IconBaseProps {
  /**
   * The content of the component.
   */
  children?: import("react").ReactNode;
  /**
   * Append to the classNames applied to the component so you can override or
   * extend the styles.
   */
  className?: string;
  /**
   * The viewBox of the SVG.
   *
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  title?: string;
  /**
   * The color of the icon.
   * @default "inherit"
   */
  color?:
    | "inherit"
    | "textPrimary"
    | "textSecondary"
    | "textHint"
    | "textDisabled"
    | "primary"
    | "secondary"
    | "error"
    | "success"
    | "warning"
    | "info";
  /**
   * The size of the icon.
   * If set to `"auto"`, the icon will get the parent's width and height.
   * @default "auto"
   */
  size?: number | "auto";
}

export type IconProps = MergeElementProps<"svg", IconBaseProps>;

export type CreateSvgIcon = (
  children: import("react").ReactNode,
  name: string
) => import("react").FC<IconProps>;

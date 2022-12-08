declare module "*.jpg" {
  const path: string;
  export default path;
}

declare module "*.pdf" {
  const path: string;
  export default path;
}

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGAElement>
  >;
  const path: string;
  export default path;
}

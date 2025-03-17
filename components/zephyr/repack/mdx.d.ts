// From https://v0.mdxjs.com/advanced/typescript
declare module "*.mdx" {
  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}

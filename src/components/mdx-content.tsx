import * as runtime from "react/jsx-runtime";
import type { ComponentType } from "react";

export type MDXComponents = Record<string, ComponentType<Record<string, unknown>>>;

type MDXModule = {
  default: ComponentType<{ components?: MDXComponents }>;
};

export function MDXContent({ code, components }: { code: string; components?: MDXComponents }) {
  // Velite emits an `arguments[0]`-style function body that we hydrate
  // with React's jsx runtime. Equivalent to MDX's `useMDXComponent`.
   
  const fn = new Function(code) as (rt: typeof runtime) => MDXModule;
  const { default: Component } = fn(runtime);
  return <Component components={components} />;
}

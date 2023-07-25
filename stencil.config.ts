import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-build-bug',
  outputTargets: [
    {
      type: 'docs-json',
      file: 'dist/docs.json',
    },
    {
      type: 'dist',
      esmLoaderPath: 'loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};

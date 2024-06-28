/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["../public"], // Nota: Usa '/' en lugar de '\\' para rutas en UNIX
  webpackFinal: async (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      os: require.resolve('os-browserify/browser'),
      // Puedes agregar otros polyfills aquí si los necesitas
    };
    return config;
  },
}
export default config;

import { defineConfig } from 'vitepress';
import { SearchPlugin } from 'vitepress-plugin-search';

const searchPluginOptions = {
  previewLength: 62,
  buttonLabel: 'Search',
  placeholder: 'Search docs',
  allow: [],
  ignore: [],
};

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Very relevant blog',
  vite: {
    plugins: [SearchPlugin(searchPluginOptions)],
  },
});

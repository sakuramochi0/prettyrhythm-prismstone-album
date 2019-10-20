// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import 'vuetify/dist/vuetify.min.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient, appOptions }) {
  // Add material icons
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
  });

  // Setup vuetify
  Vue.use(Vuetify);
  const opts = {
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
        },
      },
    },
  };

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}

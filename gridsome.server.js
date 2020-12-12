// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals');
const axios = require('axios');

module.exports = function(api) {
  // Avoid compiling vietify codes
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const { data } = await axios.get(
      'https://sakuramochi0.github.io/prettyrhythm-prismstone-scrapy/prismstone_with_brand_gcs.json'
    );
    const prismStoneCollection = addCollection({
      typeName: 'PrismStones',
    });
    for (const prismStone of data) {
      prismStoneCollection.addNode(prismStone);
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};

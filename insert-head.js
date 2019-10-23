#!/usr/bin/env node
// Temporary workaround to avoid the vue-meta problem Gridsome & Vuetify v2
const fs = require('fs');
const headFragment = require('./head-fragment');

const htmlPath = 'dist/index.html';

const html = fs.readFileSync(htmlPath).toString();
const newHtml = html.replace(/(<head>)/, `$1${headFragment}`);
fs.writeFileSync(htmlPath, newHtml);

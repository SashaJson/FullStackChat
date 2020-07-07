'use strict';

const consola = require('consola');
const {Nuxt, Builder} = require('nuxt');
const {app, server} = require('./app');
//const cors = require('cors');

let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  const nuxt = new Nuxt(config);

  const {host, port} = nuxt.options.server;

  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready()
  }

  app.use(nuxt.render);
  //app.use(cors());

  server.listen(port, () => {
    consola.ready({
      message: `Server listening on https://${host}:${port}`,
      badge: true
    });
  });
}

start();

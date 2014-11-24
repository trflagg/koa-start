/**
 * app.js
 *
 * Loads middleware and controllers and starts the app.
 */

var fs = require('fs')
    , logger = require('koa-logger')
    , router = require('koa-router')
    , koa = require('koa');

var app = module.exports = koa();

/**
 * Middleware
 */
app.use(logger());
app.use(router(app));

/**
 * Load controllers in /controllers
 */
fs.readdirSync('./server/controllers').forEach(function (file) {
    require('./server/controllers/' + file)(app);
});


// Start!
if (!module.parent) app.listen(3000);


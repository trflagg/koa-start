/**
 * app.js
 *
 * Loads middleware and controllers and starts the app.
 */

var fs = require('fs')

    , Db = require('argieDB/co-db')

    , logger = require('koa-logger')
    , router = require('koa-router')
    , serve = require('koa-static')
    , session = require('koa-session')
    , koa = require('koa');

var app = module.exports = koa();


/**
 * Create db connection
 */
console.log('Connecting to DB');
var environment = require('argieDB/environment-local');

// hide the username:password in the URL string
console.log('db URL: '+environment.db.URL.replace(/:\/\/.*:(.*)@/, 'XXXXXXX'));
var db = new Db(environment);
console.log('Connected.');


/**
 * load models in /models
 */
fs.readdirSync('./server/models').forEach(function(file) {
    require('./server/models/' + file)(db);
})


/**
 * Middleware
 */
app.use(logger());
app.keys = ['secret session cookie string'];
app.use(session());
app.use(serve('client'));
app.use(router(app));


/**
 * Load controllers in /controllers
 */
fs.readdirSync('./server/controllers').forEach(function (file) {
    require('./server/controllers/' + file)(app);
});


// Start!
if (!module.parent) app.listen(3000);


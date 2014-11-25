/**
 * indexController.js
 *
 * What happens when you first go to the site.
 */

var render = require('../render');

module.exports = function(app) {
    /**
     * index()
     *
     * send index.html.
     * @return {html}
     */
    app.get('/', index);
    function *index() {
        this.body = yield render('index.html');
    }
}

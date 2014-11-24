/**
 * indexController.js
 *
 * What happens when you first go to the site.
 */

module.exports = function(app) {
    /**
     * index()
     *
     * send index.html.
     * @return {html}
     */
    app.get('/', index);
    function *index() {
        this.body = '<img src="Winslow_Homer_004.jpg">';
    }
}

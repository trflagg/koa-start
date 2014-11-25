/**
 * render.js
 *
 * Returns co-views function.
 */

var views = require('co-views');

module.exports = views('server/views', {
    map: {
        html: 'swig'
    }
    , cache: 'memory'
});

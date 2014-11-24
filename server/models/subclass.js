var util = require('util');

module.exports = function(db) {

    var Model = require('argieDB/model')(db);

    SubClass = function(doc) {
        Model.call(this, doc);
    }
    util.inherits(SubClass, Model);

    SubClass.prototype.initialize = function() {

    };

    SubClass.prototype.saveToDoc = function(doc) {
        return doc;
    };

    SubClass.prototype.loadFromDoc = function(doc) {

    };

    SubClass.prototype.validate = function() {

    };

    db.register('SubClass', SubClass);

    return SubClass;
}

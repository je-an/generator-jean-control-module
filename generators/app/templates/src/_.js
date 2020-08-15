define(
    [
        "DomElement",
        "DomUtil",
        "Inheritance",
        "TypeCheck",
        "Failure",
        "Merge",
        "text!<%= constructorLowerCase %>-html"
        "css!<%= constructorLowerCase %>-css"
    ], function (DomElement, DomUtil, Inheritance, TypeCheck, Failure, Merge) {
        /**
         * <%= description %> 
         * @alias <%= constr %> 
         * @constructor
         * @param {Object} options - options object
         */
        var <%= constr %> = function(options) {
            var defaultOptions = {};
            Inheritance.inheritConstructor(DomElement, this, Merge({}, TypeCheck.isDefined(options) ? options : {}));
            this._element = $("<div id='<%= name %>'></div>");
        };
        Inheritance.inheritPrototype(<%= constr %>, DomElement);
        return <%= constr %>;
    });
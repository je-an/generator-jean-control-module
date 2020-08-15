define(
    [
        "DomElement",
        "DomUtil",
        "Inheritance",
        "TypeCheck",
        "Failure",
        "Merge",
        "text!<%= constrLowerCase %>-html",
        "css!<%= constrLowerCase %>-css"
    ], function (DomElement, DomUtil, Inheritance, TypeCheck, Failure, Merge, controlHtml) {
        /**
         * <%= description %> 
         * @alias <%= constr %> 
         * @constructor
         * @param {Object} options - options object
         */
        var <%= constr %> = function(options) {
            var defaultOptions = {};
            Inheritance.inheritConstructor(DomElement, this, Merge({
                html: controlHtml,
            }, TypeCheck.isDefined(options) ? options : {}));

        };
        Inheritance.inheritPrototype(<%= constr %>, DomElement);
        return <%= constr %>;
    });
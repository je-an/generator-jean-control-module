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
         * @param {Object} options.id - id of the element
         */
        var <%= constr %> = function(options) {
            var defaultOptions = {};
            Inheritance.inheritConstructor(DomElement, this, Merge({
                html: controlHtml,
                id: TypeCheck.isString(options.id) ? options.id : ""
            }, TypeCheck.isDefined(options) ? options : {}));

        };
        Inheritance.inheritPrototype(<%= constr %>, DomElement);
        return <%= constr %>;
    });
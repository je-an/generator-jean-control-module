define(
    [
        "jQuery",
        "TypeCheck", 
        "Inheritance", 
        "Control",
        "css!<%= constructorLowerCase %>-css"
    ], function ($, TypeCheck, Inheritance, Control) {
    /**
     * <%= description %> 
     * @alias <%= constructor %> 
     * @constructor
     * @param {Object} options - options object
     */
    var <%= constructor %> = function(options) {
        var defaultOptions = {};
        Inheritance.inheritConstructor(Control, this, [options, defaultOptions]);
        // Pass your html markup this._element
        this._element = $("<div id='<%= name %>'></div>");
    };
    Inheritance.inheritPrototype(<%= constructor %>, Control);
    return <%= constructor %>;
});
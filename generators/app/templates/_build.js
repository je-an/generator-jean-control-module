({
    baseUrl: '.',
    out: 'dist/<%= name %>.js',
    optimize: '<%= optimize %>',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/<%= constr %>"],
    wrap: {
        start:
            "(function (root, factory) { \n" +
            " \t if (typeof define === 'function' && define.amd) { \n" +
            "\t \t define([], factory); \n" +
            "\t} else { \n" +
            "\t \troot.<%= constr %> = root.<%= constr %> || {}; \n" +
            "\t \troot.<%= constr %> = factory();\n" +
            "\t}\n" +
            "}(this, function() {",
        end:
            "\n \t return require('src/<%= constr %>'); \n" +
            "}));"
    },
    paths: {
        "text": "node_modules/text/text",
        "css": "node_modules/require-css/css",
        "css-builder": "node_modules/require-css/css-builder",
        "normalize": "node_modules/require-css/normalize",
        Inheritance: "node_modules/jean-inheritance/src/Inheritance",
        DomElement: "node_modules/jean-dom-element/src/DomElement",
        DomUtil: "node_modules/jean-dom-util/src/DomUtil",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Failure: "node_modules/jean-failure/src/Failure",
        Merge: "node_modules/jean-merge/src/Merge",
        "<%= constrLowerCase %>-html": "src/html/<%= constrLowerCase %>.html",
        "<%= constrLowerCase %>-css": "src/css/<%= constrLowerCase %>"
    }
})
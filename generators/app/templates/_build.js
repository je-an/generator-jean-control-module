({
    baseUrl: '.',
    out: 'dist/<%= name %>.js',
    optimize: '<%= optimize %>',
    name: 'node_modules/jean-amd/dist/jean-amd',
    include: ["src/<%= constructor %>"],
    wrap: {
        start: 
        "(function (root, factory) { \n" +
        " \t if (typeof define === 'function' && define.amd) { \n" +
        "\t \t define([], factory); \n" +
        "\t} else { \n" +
        "\t \troot.<%= constructor %> = root.<%= constructor %> || {}; \n" +
        "\t \troot.<%= constructor %> = factory();\n" +
        "\t}\n" +
        "}(this, function() {",
        end:
        "\n \t return require('src/<%= constructor %>'); \n" +
        "}));"
    },
     paths:{
        jquery: "node_modules/jquery/dist/jquery",
        css: "node_modules/require-css/css.min",
        "css-builder": "node_modules/require-css/css-builder",
        "normalize": "node_modules/require-css/normalize",
        TypeCheck: "node_modules/jean-type-check/src/TypeCheck",
        Control: "node_modules/jean-control/src/Control",
        Inheritance: "node_modules/jean-inheritance/src/Inheritance",
        "<%= constructorLowerCase %>-css": "src/<%= constructorLowerCase %>"
    }
})
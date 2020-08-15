## Description

<%= description %>

## Support
Supports AMD eco system. If there is no loader, <%= constr %> is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new <%= constr %>();


```
- Use it with require.js
```js
require(["path/to/<%= constr %>"], function(<%= constr %>){
    // Work with <%= constr %>
});
```

## Style
- The control comes with build-in styles, which will programmatically be injected into the page head as style tag. 
- For custom styling add own styles to the end of the body.

## Installation

`npm install <%= name %> --save --legacy-bundling`

## API Reference

### <%= constr %> Constructor

**Options**
- **placeholder**: `String` - `mandatory` - description


## Tests

- Open spec/spec-runner.html in browser to see the test cases.
- Open example/index.html in your web browser for an example implementation.

## License

MIT
# Incompatible

> ⚠️ WIP (Blocked)

Check all compiled JavaScript files and find code using incompatible APIs based on the provided browser compatibility strategy. This is used to check the compatibility of the actual generated code after compilation.

## MVP First

- [ ] Global variables: [bcd - api](https://github.com/mdn/browser-compat-data/tree/main/api)
- [ ] Builtin functions: [bcd - javascript]https://github.com/mdn/browser-compat-data/tree/main/javascript

## Todos

Refer to [closure-compiler](https://github.com/google/closure-compiler)

- [ ] Parse `*.js` files to `AST`.
- [ ] Walk through `AST` to find all API usage.
- [ ] Parse `browserlist` to find available APIs.
  - [ ] Works with data from `caniuse`
- [ ] Summary APIs and the compatibility.
- [ ] Output result.
  - [ ] **Locate to the file** which is using incompatible APIs.
- [ ] Plugins from popular bundlers.

- [ ] How does Babel work? Can Babel replace this tool?
- [ ] How does autoprefixer work? (Might be simpler than babel.)

```ts
function done(foo: string | number): boolean {
  // Supposing: 👇
  // String.prototype.done => supported in chrome 75
  // Number.prototype.done => supported in chrome 60
  // 
  // How to handle with this `done`?
  // Is it `String.prototype.done` or `Number.prototype.done`
  return foo.done()
}

```

## License

[MIT](./LICENSE) @ [Kricsleo](https://github.com/kricsleo)
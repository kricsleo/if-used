# Incompatible

> ⚠️ WIP

Check all compiled JavaScript files and find code using incompatible APIs based on the provided browser compatibility strategy. This is used to check the compatibility of the actual generated code after compilation.

## Todos

- [ ] Parse `*.js` files to `AST`.
- [ ] Walk through `AST` to find all API usage.
- [ ] Parse `browserlist` to find available APIs.
  - [ ] Works with data from `caniuse`
- [ ] Summary APIs and the compatibility.
- [ ] Output result.
  - [ ] **Locate to the file** which is using incompatible APIs.

- [ ] How does Babel work? Can Babel replace this tool?
- [ ] How does autoprefixer work? (Might be simpler than babel.)

## License

[MIT](./LICENSE) @ [Kricsleo](https://github.com/kricsleo)
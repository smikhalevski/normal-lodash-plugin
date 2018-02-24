# Normal Lodash Plugin for Webpack

This plugin aims to reduce size of the result bundle via squashing all requests of Lodash functions
into a request to `node_modules/lodash`.

When `NormalLodashPlugin` is used requests to `lodash.isstring` and `lodash/isString` would return
the same Lodash function. 


## License

The code is available under [MIT licence](LICENSE.txt).

# Normal Lodash Webpack Plugin

This plugin aims to reduce size of the result bundle via squashing any requests to Lodash files
into a request to `<project_root>/node_modules/lodash`.

When `NormalLodashPlugin` is used then requests to `lodash.isstring` and `lodash/isString` would return
the same Lodash function.


## License

The code is available under [MIT license](LICENSE.txt).

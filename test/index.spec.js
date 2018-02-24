const NormalLodashPlugin = require('../index');

const re = NormalLodashPlugin.resourceRegExp;

describe('NormalLodashPlugin', () => {
  it('matches "lodash"', () => {
    expect(re.exec('lodash')[1]).toBeUndefined();
  });

  it('matches "lodash.foo"', () => {
    expect(re.exec('lodash.foo')[1]).toEqual('foo');
  });

  it('matches "lodash/foo"', () => {
    expect(re.exec('lodash/foo')[1]).toEqual('foo');
  });

  it('matches "lodash.foo/index"', () => {
    expect(re.exec('lodash.foo/index')[1]).toEqual('foo');
  });

  it('matches "lodash.foo/index.js"', () => {
    expect(re.exec('lodash.foo/index.js')[1]).toEqual('foo');
  });

  it('matches "lodash/foo"', () => {
    expect(re.exec('lodash/foo')[1]).toEqual('foo');
  });

  it('matches "lodash/foo.js"', () => {
    expect(re.exec('lodash/foo.js')[1]).toEqual('foo');
  });

  it('matches "lodash/fp/foo"', () => {
    expect(re.exec('lodash/fp/foo')[1]).toEqual('fp/foo');
  });

  it('matches "lodash/fp/foo.js"', () => {
    expect(re.exec('lodash/fp/foo.js')[1]).toEqual('fp/foo');
  });
});

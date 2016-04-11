# My super-cool website

[willfaurot.com](willfaurot.com)

#### Start the server for development:

```
npm start
```

#### Start the server in production

```
npm run build
npm run serve
```

#### Run tests

Run command-line tests once:

```
npm test
```
Run tests on changes:

```
npm run test:watch
```

Run tests in browser:

```
npm run test:browser
open test/test.html
```

This is hacky and assumes you're using OSX and have access to the `open` utility.
It's a separate process you'll have to leave open which rebundles the test files.

#### Run the linter

```
npm run lint
```

API Fixtures generator
======================

This is a super lightweight library to generate fixtures files from all `fetch` requests performed by your frontend.
Files are immediately downloaded to your computer.

You can then use them, for instance, to mock your API calls and perform functional testing of your application.

Usage
-----

Install the lib:

```
npm install --save-dev @dldl/api-fixtures-generator
```

Use the lib, for instance in your `index.js` file (**the file should be loaded *before* any other library so the fetch
function is replaced effectively everywhere in your app**):


```js
import "@dldl/api-fixtures-generator"

// Your application code
```

You may conditionally load the library based on the `NODE_ENV` environment variable to only load this in testing (for
instance by using an already generated fixture file or by generating it on the fly like `Netflix/pollyjs` would do).

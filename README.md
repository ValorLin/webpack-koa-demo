# webpack-koa-demo
Webpack demo that compile koa@2 code into a single bundle that don't rely on node_modules.

## Features
0. Generate executable js file without any dependencies.
0. ES6 support using babel.

## Run
Install dependencies
```
npm install
```
Run webpack
```
webpack
```
Run app-bundle.js, which is a executable file without any dependencies.
```
cd dist
node app-bundle.js
```
Visit http://localhost:8080

## Why
When publish your application, you need to run `npm install` in the server.
And it's unreliable, because your might accidentally got the wrong version of npm package
that different to your local version. That could break your code.

Now, build your application, and publish the executable file. No more
`npm install`, no more broken but faster publishing.
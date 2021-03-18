# RxJS: Reactive Extensions For JavaScript

# <img src="src/assets/Rx_Logo_S.png" alt="RxJS Logo" width="86" height="86">

# Getting started with RxJS

## Index

- Installing RxJS / Setting up a dev environment
- Observables & Subscriptions
- Subjects
- Operators

## Installing RxJS / Setting up a dev environment

For the purpose of this course, we're going to set up our own development environment where we're not going to rely on any frontend JS frameworks

### Installing Dependencies

Open up your console and create a new project folder, then hop into it:

```
mkdir rxjs && cd rxjs

```

We're going to use npm for adding packages. Run the following command to create a package.json file:

```
npm init -y

```

Next, add RxJS, Webpack and TypeScript:

```
npm i rxjs rxjs-compat webpack webpack-dev-server typescript ts-loader

```

Install webpack-cli as a dev dependency

```
npm i webpack-cli --dev
```

## Modifying Package.json

Open the package.json file and add the following:

```
{
  "name": "rxjs",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",

  // Add this

  "scripts": {
   "start": "webpack serve --mode development"
  },

```

## Setting up Webpack

Create a file called **webpack.config.js** and paste the following boilerplate code:

```
const path = require('path');

module.exports = {
  entry: './src/code.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js', '.tsx' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

## TypeScript Configuration

Create another file called **tsconfig.json** and paste the following config settings:

```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "target": "es6",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2017",
      "dom"
    ]
  }
}
```

## Finishing the Project Setup

Create an **index.html** file and paste the following contents:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>RxJS Basics</title>

    <style>
        body { font-family: 'Arial'; background: #ececec; }
        ul { list-style-type: none; padding: 20px; }
        li { padding: 20px; background: white; margin-bottom: 5px; }
    </style>
</head>
<body>
    <ul id="output"></ul>

    <script src="/bundle.js"></script>
</body>
</html>
```

Instead of console.logging everything while we learn RxJS, we're going to output most of the results within our unordered list #output.

Next, create a new folder called **/src/** and inside of it, a file called code.ts with the following contents:

```
import * as Rx from "rxjs/Observable";

console.log(Rx);
```

Go to your console within the project folder and type:

```
npm start
```

Visit **http://localhost:8080** in your browser and view the console (CTRL-SHIFT-i) and you should use > Object.

This means that RxJS is ready to go!

Now that our RxJS project is setup, we're going to start learning all about the basics going forward.

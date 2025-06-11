require('@babel/register')({
  presets: ['@babel/preset-env']
});

const chai = require('chai');
const sinon = require('sinon');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// ✅ Set up a simulated DOM environment
require('jsdom-global')();

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');
document.body.innerHTML = html;

// ✅ Transpile and evaluate your JavaScript in the DOM environment
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'),
  { presets: ['@babel/preset-env'] }
);

eval(babelResult.code); // executes your script in the test DOM

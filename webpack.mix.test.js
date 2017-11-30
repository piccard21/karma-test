const mix = require('laravel-mix');
const baseConfig = require(`${__dirname}/webpack.config.base.js`);
const fs = require('fs');
const path = require('path');

const specsFolder = './tests_js/Specs';
const testsFolder = './tests_js/Tests';

mix.webpackConfig(baseConfig);

mix.setPublicPath('tests_js');

let specsPath = path.resolve(specsFolder);
if(!fs.existsSync(specsPath)) return;

let files = fs.readdirSync(specsPath).filter(f => fs.statSync(path.resolve(specsPath,f)).isFile() && f.substr(0,1) !== '.');

files.forEach(function(f) {
	mix.js(path.resolve(specsPath, f), testsFolder);
});
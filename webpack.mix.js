let mix = require('laravel-mix');
let argv = require('yargs').argv;
let suffix = (argv.env && argv.env.suffix) ? argv.env.suffix : 'main';
require(`${__dirname}/webpack.mix.${suffix}.js`);
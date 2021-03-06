# Usage

  ```
	{{--input-chip-component: COLOR--}}
	<div class="form-group">
	    <label for="input-chip-component-color" style="display: block">Input-Chip: color</label>
	    <div id="input-chip-component-color">
	        <input-chip v-model="whatever" chip-type="info" @chip_added="test_chip_added"></input-chip>
	    </div>
	    <small id="" class="chip-hint">Lorem ipsum dolor set amed</small>
	</div>
  ```
  
  
  ```
	  new Vue({
	    el: "#input-chip-component-color",
	    // template: '#chip-test-template',
	    components: {
	        InputChip
	    },
	  
	    data: {
	        whatever: ["hallo", "out", "there"]
	    },
	  
	    methods: {
	        test_chip_added(args) {
	            console.info('test_chip_added', args);
	        }
	    },
	    computed: {},
	  
	    created() {
	        console.info("created")
	    },
	    mounted() {
	        console.info("mounted")
	    }
	  })
  ```

* automatic transpile?????
  * (see)[https://laracasts.com/series/learn-vue-2-step-by-step/episodes/30?autoplay=true]
    * npm i -D babel-presets-es2015
    * npm i -D browser-env
  
  * package.json 
  ```
  "ava": {
   "require": [
    "babel-register",
    "./test/helpers/setup-browser-env.js"
   ]
  },
  "babel": {
    "presets": ["es2015"]
  }
  ```
  
  
  * setup-browser-env.js
  
  ```
 import browserEnv from 'browser-env'
  ```
  
 import Vue from 'vue/dist/vue.js'

  


# Bootstrap 4
* [see](https://sutherlandboswell.com/upgrading-to-bootstrap-4-in-laravel-5-5/)

# karma-test

* **karma init** in *tests_js*
* **npm i yargs -D**
* **npm install --save-dev karma-nyan-reporter**
* **npm install --save-dev karma-phantomjs-launcher**

* change *browser* & *runner* option inside tests_js/my.conf.js

  ```
  browsers: ['PhantomJS'],
  reporters: ['nyan'],
  ```
	  
	  
* 4 x webpack.mix-files
  * webpack.mix.js  
  ```
  let mix = require('laravel-mix');
     let argv = require('yargs').argv;
     let suffix = (argv.env && argv.env.suffix) ? argv.env.suffix : 'main';
     require(`${__dirname}/webpack.mix.${suffix}.js`);
  ```
  
  * webpack.config.base.js 
  
  ```
  module.exports = {
		// aliases simplifying require/import
		resolve: {
			alias: {
				Assets: path.resolve(__dirname, 'resources/assets/'),
				Components: path.resolve(__dirname, 'resources/components/')
			}
		},
	
		// never actually import following libs, relying on their global availability
		externals: {
			jquery: 'jQuery',
			lodash: {
				commonjs: 'lodash',
				commonjs2: 'lodash',
				amd: 'lodash',
				root: '_',
				var: '_'
			}
		}
	};

  ```
  * webpack.mix.main.js
  
  ```
  let mix = require('laravel-mix');
  
  mix.js('resources/assets/js/app.js', 'public/js')
  	.sass('resources/assets/sass/app.scss', 'public/css');
  ```
  * webpack.mix.test.js
  
  ```
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
   ```

* package.json

  ```
        "test-compile": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js --env.suffix=test",
        "test": "npm run test-compile & karma start tests_js/my.conf.js  --log-level debug --single-run"
   ```
  
* compile tests
  ```
  npm test
  ```
  
* run tests
  ```
  karma start tests_js/my.conf.js
  ```
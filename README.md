# [AppDK](http://github.com/evanvosberg/appdk) - (Application Development Kit)
A module based Javascript library

## Library

- [AppDK modules](http://github.com/evanvosberg/appdk)
- [RequireJS](http://github.com/jrburke/requirejs)
- [jQuery](http://github.com/jquery/jquery)
- [jQuery UI](http://github.com/jquery/jquery-ui)
- [jQuery Color](http://github.com/jquery/jquery-color)
- [jQuery Datalink](http://github.com/jquery/jquery-datalink)
- [jQuery Metadata](http://github.com/jquery/jquery-metadata)
- [jQuery scrollTo](http://github.com/flesler/jquery.scrollTo)
- [JSON 2](http://github.com/douglascrockford/JSON-js)
- [QUnit](http://github.com/jquery/qunit)
 
## Getting started

### Clone repository

First, clone a copy of the main AppDK git repo by running:

```bash
git clone git://github.com/evanvosberg/appdk.git
```

### Initialize sub modules

#### jQuery

Enter the directory and install the Node dependencies:

```bash
cd appdk/external/jquery && npm install
```

Then, build a complete, version of jQuery, type the following:

```bash
grunt
```

#### jQuery UI

Enter the directory and install the Node dependencies:

```bash
cd appdk/external/jquery-ui && npm install
```

Then, build a complete, version of jQuery UI, type the following:

```bash
grunt release
```

#### jQuery Color

Enter the directory and install the Node dependencies:

```bash
cd appdk/external/jquery-color && npm install
```

Then, build a complete, version of jQuery Color, type the following:

```bash
grunt build
```

### Initialize AppDK

Enter the directory and install the Node dependencies:

```bash
cd appdk && npm install
```

Make sure you have `grunt` installed by testing:

```bash
grunt setup
```

### Running grunt build / test tasks

Get a complete, minified (w/ Uglify.js), linted (w/ JSHint) distribution, type the following:

```bash
grunt
```

Get a just built distribution, type the following:

```bash
grunt build
```

Get a just test cases, type the following:

```bash
grunt test
```
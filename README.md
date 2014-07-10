# Ember Rocks ( em-cli )
====================

## What is this repo?

> An Em(ber) command line utility to help developer(s) build an ambitious web application. It is highly inspired by other projects, [ember-cli](https://github.com/stefanpenner/ember-cli), [ember-tools](https://github.com/rpflorence/ember-tools).

## Ember-cli is being developed and maintained by Ember core team member. Why am I building another em(ber)-cli?

**Ember** is an opinionated framework, and **Ember-cli** has chosen [broccoli](https://github.com/broccolijs/broccoli) as its build tool and [Qunit](https://github.com/jquery/qunit) as its testing tool. **Ember-cli** project is trying to be an universal toolset to fit most of use cases for most of **Ember** developer. Well, I think that is awesome. After I built a large Backbone application (>10000 LOC), I developed a set of toolings which fit my workflow well. This approach is my opinionated toolset on building a large scaled Node.js modern web application with Ember.js on the client side.

**Ember Rocks** will be installed globally on your local machine. Then user would have an `em` command available. It is chosen [gulp](https://github.com/gulpjs/gulp) as its build tool. In fact, **Ember Rocks** is powered by [gulp](https://github.com/gulpjs/gulp) under the hook. The main difference between two awesome build tools is, *broccoli* use "directory in, directory out" pattern, and *gulp* use "file in, file out" pattern. *gulp* takes advantage of *Node Stream* to pipe files elsewhere. This is the one I perfer for now until [broccoli](https://github.com/broccolijs/broccoli) is out of beta. Sorry, [Jo Liss](https://twitter.com/jo_liss), you are awesome.

In addition to technology stack besides Ember.js, I have picked [sass](http://sass-lang.com/) as a css pre-compiler, [autoprefixer](https://github.com/ai/autoprefixer) as a css post-compiler, [express](http://expressjs.com/) as a node web application server, [mocha](http://visionmedia.github.io/mocha/) as a javascript test framework, other technology should be exactly the same with [ember-cli](https://github.com/stefanpenner/ember-cli).

Just like [lodash](lodash.com) is a similar project to [underscore](http://underscorejs.com/), [Ember Rocks](https://github.com/mattma/ember-rocks) is a similar project to [ember-cli](https://github.com/stefanpenner/ember-cli). I will try to sync the features from [ember-cli](https://github.com/stefanpenner/ember-cli) to [Ember Rocks](https://github.com/mattma/ember-rocks).

## Getting Started
Install the module with: `npm install -g ember-rocks`

```javascript
var em = require('em');
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 Matt Ma
Licensed under the MIT license.

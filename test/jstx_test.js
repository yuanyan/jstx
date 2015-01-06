'use strict';

var assert = require('assert');
var jst = require('../');

var template = jst('<%-foo%>');

assert.equal(template({foo:'foo'}), 'foo');

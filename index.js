
/**
 * Module dependencies.
 */

var Rect = require('rect');
var inherit = require('inherit');

module.exports = Selection;

function Selection(x, y, w, h) {
  Rect.apply(this, arguments);
  this.el = document.createElement('div');
  this.el.className = 'selection-rect';
}

inherit(Selection, Rect);

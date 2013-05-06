
/**
 * Module dependencies.
 */

var inherit = require('inherit');
var Rect = require('rect');
var css = require('css');

module.exports = Selection;

function Selection(x, y, w, h) {
  this.el = document.createElement('div');
  this.el.className = 'selection-rect';
  Rect.apply(this, arguments);
}

inherit(Selection, Rect);

Selection.prototype.moveTo = function(x, y){
  Rect.prototype.moveTo.apply(this, arguments);
  css(this.el, {
    top: y,
    left: x
  });
};

Selection.prototype.size = function(w, h){
  Rect.prototype.size.apply(this, arguments);
  css(this.el, {
    width: this.w,
    height: this.h
  });
};

Selection.prototype.to = function(w, h){
  Rect.prototype.to.apply(this, arguments);
  css(this.el, {
    width: this.w,
    height: this.h
  });
};

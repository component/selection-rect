
/**
 * Module dependencies.
 */

var inherit = require('inherit');
var Rect = require('rect');
var css = require('css');

/**
 * Expose `Selection`.
 */

module.exports = Selection;

/**
 * Initialize a Selection rect.
 */

function Selection(x, y, w, h) {
  this.el = document.createElement('div');
  this.el.className = 'selection-rect';
  Rect.apply(this, arguments);
}

/**
 * Inherit from `Rect.prototype`.
 */

inherit(Selection, Rect);

/**
 * Move proxy.
 */

Selection.prototype.moveTo = function(x, y){
  Rect.prototype.moveTo.apply(this, arguments);
  css(this.el, {
    top: y,
    left: x
  });
};

/**
 * Size proxy.
 */


Selection.prototype.size = function(w, h){
  Rect.prototype.size.apply(this, arguments);
  css(this.el, {
    width: this.w,
    height: this.h
  });
};

/**
 * To proxy.
 */

Selection.prototype.to = function(w, h){
  Rect.prototype.to.apply(this, arguments);
  css(this.el, {
    width: this.w,
    height: this.h
  });
};

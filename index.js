
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

function Selection(top, left, width, height) {
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

Selection.prototype.moveTo = function(left, top){
  Rect.prototype.moveTo.apply(this, arguments);
  css(this.el, {
    top: top,
    left: left
  });
};

/**
 * Size proxy.
 */


Selection.prototype.size = function(width, height){
  Rect.prototype.size.apply(this, arguments);
  css(this.el, {
    width: this.width,
    height: this.height
  });
};

/**
 * To proxy.
 */

Selection.prototype.to = function(right, bottom){
  Rect.prototype.to.apply(this, arguments);
  css(this.el, {
    left: this.left,
    top: this.top,
    width: this.width,
    height: this.height
  });
};

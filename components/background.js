/**
 *  Background component
 */

const colors = require('../config/colors');

const dimensionsHelper = require('../helpers/dimensions');

function backgroundComponent(app) {
  this.app = app;
  this.background = app.createRect();

  this.background.w(app.w());
  this.background.h(app.h());
  this.background.fill(colors.background);
}

backgroundComponent.prototype.resize = function() {
  this.background.w.anim().from(this.background.w()).to(dimensionsHelper.calcWidth(this.app.w(), 25)).dur(1000).start();
}

module.exports = backgroundComponent;

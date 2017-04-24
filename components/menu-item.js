/**
 *  Menu component
 */

const colors = require('../config/colors');

const dimensionsHelper = require('../helpers/dimensions');

function menuItemComponent(app, title, icon, index) {
  this.app = app;
  this.menuItemGroup = app.createGroup();

  this.menuItemCircle = app.createCircle();
  this.menuItemCircle.fill(colors.background);
  this.menuItemCircleBorder = app.createCircle();
  this.menuItemCircleBorder.fill(colors.menuLight);

  this.menuItemCircleBorder.radius(50);
  this.menuItemCircle.radius(45);

  this.menuItemGroup.x(75 + (200 * index));
  this.menuItemGroup.y(50);

  this.menuItemGroup.add(this.menuItemCircleBorder);
  this.menuItemGroup.add(this.menuItemCircle);

}

menuItemComponent.prototype.resize = function() {

}

module.exports = menuItemComponent;

/**
 *  Menu component
 */

const colors = require('../config/colors');

const dimensionsHelper = require('../helpers/dimensions');

const menuItemComponent = require('./menu-item');

function menuComponent(app, menuItems) {
  this.app = app;
  this.menuGroup = app.createGroup();

  const width = menuItems.length * 200;

  this.menuGroup.w(width);
  this.menuGroup.h(100);

  this.menuGroup.x(dimensionsHelper.getCenterX(this.app.w(), width));
  this.menuGroup.y(dimensionsHelper.getCenterY(this.app.h(), this.menuGroup.h()));

  menuItems.forEach((menuItem, index) => {
    const item = new menuItemComponent(app, menuItem.title, menuItem.icon, index);
    this.menuGroup.add(item.menuItemGroup);gkv76yugchjkdwpp[joijijidijkzzjhioohdajosauUIdoiyAHiaOIousdhovxysdhdizlhgcguiagdsy0dyDUYOfyf\ldkcs`ijdsiuruiqryadwjdasuiodfjcjfdjudejcxjckdiscjjcjcvjdcjvjfdjfvj]
  });

}

menuComponent.prototype.resize = function() {

}

module.exports = menuComponent;

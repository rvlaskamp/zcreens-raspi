/**
 *  Zcreens RaspberryPi App
 */
 const amino = require('./libs/aminogfx-gl/main');
 const gfx = new amino.AminoGfx();

/*
  Properties
 */

/*
  Views
 */

const startupView = require('./views/startup');

 gfx.start((err) => {
   if (err) {
     console.log('Start failed', err.message);
     return;
   }

   const root = gfx.createGroup();

   gfx.setRoot(root);

   root.add(startupView.create(gfx));

 });

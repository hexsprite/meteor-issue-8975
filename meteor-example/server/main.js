import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  const lolex = require('lolex')
  // var clock = lolex.install()
  // clock = lolex.install()  // commenting out this line fixes the issue
  // clock.uninstall()
  // // code to run on server at startup

  var clock
  clock = lolex.install()
  clock = lolex.install()
  clock.uninstall()
  console.log('clocks done')
})

// so it's only the installation of a clock the 2nd time that causes this issue
// without uninstalling the 1st

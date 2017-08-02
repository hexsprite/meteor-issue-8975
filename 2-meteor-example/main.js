import { Meteor } from 'meteor/meteor'

if (Meteor.isServer) {
  Meteor.startup(() => {
    const lolex = require('lolex')
    var clock = lolex.install()
    clock = lolex.install() // commenting out this line fixes the issue
    clock.uninstall()

    // so it's only the installation of a clock the 2nd time that causes this
    // issue without uninstalling the 1st

    // ... but only when service-configuration and accounts-base are INSTALLED?!
    // see additional details in issue
  })
}

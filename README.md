## Tested with
Meteor 1.5.1, 1.6-beta.15, 1.6 branch, devel branch

## Expected Behavior
HTTP requests to Meteor should continue to work normally even if I mock out the time or change system timers.

## Actual Behavior
Under certain circumstances Meteor will stop responding to incoming HTTP requests when time is mocked

Mocking the date can cause incoming HTTP requests to Meteor to hang somewhere at the node level. By using `NODE_DEBUG=net,http` I can see that the incoming socket times out. (sample output in directory `3-debug-info`)

## Reproduction URL
https://github.com/hexsprite/meteor-issue-8975.git

There are two examples here:

- `1-node-example` - shows how this works fine under plain NodeJS

- `2-meteor-example` - shows how Meteor hangs under the circumstance. Then you can comment out `accounts-base` in `.meteor/packages` and see how it now works!

More details in various `README` files in the repo.

## Workaround

Disable `accounts-base` package -- try commenting it out in the example to see. Not sure why. But this could be a clue!

## Impact

I have been writing tests that mock the system time. I noticed that I could no longer access the client side tests. Right now I can't run my client side tests and server side tests in a single run.

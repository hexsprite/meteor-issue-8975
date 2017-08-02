This repo has two versions to demonstrate how what works under Node does not under Meteor.

The weird thing is that by removing accounts-base it works under Meteor just fine!

----

Mocking Time Causes Meteor HTTP Request To Hang

## Expected Behavior
HTTP requests to Meteor should continue to work normally even if I mock out the time or change system timers.

## Actual Behavior
Under certain circumstances Meteor will stop responding to incoming HTTP requests when time is mocked

Mocking the date can cause incoming HTTP requests to Meteor to hang somewhere at the node level. By using NODE_DEBUG=net,http I can see that the incoming socket times out. (sample output in directory 3-debug-info)

## Reproduction URL
Just a moment...

## Workaround

Disable `accounts-base` package -- try commenting it out in the example to see. Not sure why. But this could be a clue!

## Impact

I have been writing tests that mock the system time. I noticed that I could no longer access the client side tests. Right now I can't run my client side tests and server side tests in a single run.

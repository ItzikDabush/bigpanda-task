# bigpande-task

Take Home Test from BigPanda‏

## The goal is implement a Non Blocking Producer/Consumer stream processing service that exposes an HTTP api.

### The blackbox executable that spits out an infinite stream of lines of event data encoded in JSON:

- Linux - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-linux-amd64
- Mac OS X - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-macosx-amd64
- Windows - https://s3-us-west-1.amazonaws.com/bp-interview-artifacts/generator-windows-amd64.exe

## Service Requirements

It should consume the output of the generator and gather the following stats:
A count of events by event type.
A count of words encountered in the data field of the events. (e.g. “the” → 32, “me” → 5)
It should expose these stats in an HTTP interface.
Stream may encounter corrupt JSON lines and should handle such events well and without interruption.

## Build:

Run `npm install`

## Run:

Run `npm start`

- Use http://localhost:3001/events URL for retrieve Event types counters
- Use http://localhost:3001/words URL for retrieve Words counters
- Use http://localhost:3001/stop URL to quit the process
- Any other route will redirect to home route

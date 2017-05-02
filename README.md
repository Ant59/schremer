# Schremer

Scream your schemes!

A microblogging platform for evil villains to share and rate plans.

## Architecture

The app uses Angular 4 and ngrx to produce a modern web application with redux-style state management. The app is setup as follows:

- Smart container components carry all logic
- Dumb components simply take input data and output events
- Services connect the app to the outside world
- Reducers create new state from action calls
- Effects can interact outside of state on actions

All data is treated as an observable stream. Performance benefits are gained from having Angular avoid dirty change detection checks and only updating components when streams push new state.

UI is fully responsive for mobile, tablet and desktop. Uses vanilla SCSS with no framework for styling. Components use encapsulated styles for reusability.

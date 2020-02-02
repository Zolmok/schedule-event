This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I ran across an interesting UI that I wanted to try and replicate with React: https://dribbble.com/shots/9357635-Schedule-Demo-Exploration

This is my attempt.  My goal was to learn how React hooks worked as well as just do something fun.  I'm not happy with the tests.  There doesn't seem to be a way to test a form button `onClick` event.  Jest doesn't seem to support `onSubmit` and when you click the button that seems to be the only thing it want's to do.  Also I had to rework things a bit to get redux out of the way for some tests.  If you have any feedback on how to improve I would love to hear from you.

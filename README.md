This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I ran across an interesting UI that I wanted to try and replicate with
React: [Schedule Demo Exploration](https://dribbble.com/shots/9357635-Schedule-Demo-Exploration).

You can see a demo of the site
[here](https://zolmok.github.io/schedule-event/).

---

<p align="center">
  <img width="723" src="https://github.com/Zolmok/schedule-event/blob/master/docs/step-1.png">
</p>

---

<p align="center">
  <img width="723" src="https://github.com/Zolmok/schedule-event/blob/master/docs/step-2.png">
</p>

---

<p align="center">
  <img width="723" src="https://github.com/Zolmok/schedule-event/blob/master/docs/step-3.png">
</p>

---

This is my attempt to recreate this project as best as I could with
nothing but the animated gif as my guide.  My goal was to learn how
React hooks worked as well as just do something fun.  I'm not happy
with the tests I came up with.  There doesn't seem to be a way to test
a form button `onClick` event.  Jest doesn't seem to support
`onSubmit` and when you click the button that seems to be the only
thing it want's to fire.  Also I had to rework things a bit to get
redux out of the way for some tests.  If you have any feedback on how
to improve I would love to hear from you.  I've written a blog post
about my efforts you can read
[here](https://zolmok.org/posts/portfolio-schedule-event/) if you're
interested.

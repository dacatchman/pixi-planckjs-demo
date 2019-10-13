# PIXI.js + Planck.js, A Demonstration

![pixi+planck](https://github.com/dacatchman/pixi-planckjs-demo/blob/master/screenshot.png?raw=true)

This project is provided as a demonstration for using Planck.js (Box2D) with PIXI.js.  In addition, it (should) demonstrate a proper custom game loop with fixed timesteps for physics simulation and smooth animation via interpolation (if I learned anything from gaffer, that is).

Please note that the priority of this project was to get Planck.js and PIXI working together in a proper fashion.  It is intended for academic and learning purposes only, and may be a good starting point for using these awesome libraries together.  For optimization tips for either library, you will want to contact the library developers or contributors.  I am not an expert on either library -- but I wanted to use the work I did recently with them to serve others, if possible.

Please visit [Plank.js](https://github.com/shakiba/planck.js/) and [PIXI.js](https://github.com/pixijs/pixi.js) for more.

## Live Demo

There is now a live demo hosted by [GitHub Pages](https://dacatchman.github.io/pixi-planckjs-demo/).

## Usage

Clone the repo of course, and then:

```
npm install
npm start
```

This does use electron for a (lazy) webserver and integrated environment for testing.  Otherwise, feel free to run index.html in your own webserver, as you are probably used to doing for html5 development.  The only other file required is bunny.png, but you can use any image you'd like.  I borrowed this one from the PIXI website.

In the index.html file you will find a bunch of variables you can tune and tweak to see the outcomes.  It's a sandbox, so go nuts.  The code is documented enough, but feel free to ask me any questions.

## New Stuff

The most recent release features triangle shapes.  More flags are provided, such as interpolation, bullet mode, and the ability to increase or decrease the physics timestep in real time.

Try turning off interpolation and lowering the physics steps to see how cool and important this feature can be.

## Additional Thoughts

Also found in this demo is physics state interpolation and a fixed timestep (primarily made popular by gaffer on games, Glenn Fiedler).

Planck.js is a very true-to-C style re-write, and so you'll find some oddities in the way it's used (from a Javascript developer's standpoint, that is).  Specifically, iterating is a bit foreign for modern Javascript, and the getters tend to be by reference.  If you have a C++ background, this makes sense.  If not, it can be a bit jarring at first.  Box2D in general is rather verbose, and I tried to minimize that with a couple custom classes.  Hopefully it worked out.

Conceptually, a lot of new users of Box2d will try to make it 1-to-1 (in pixels) in terms of screen space and the physics simulation.  This is not the intended use of Box2d.  Rather, Box2D should be executed in a much smaller environment (resolution wise).  In this demo, you will see how to convert between box2d space and screen space.

I am unaware of a way in PIXI to modify the viewport or projection matrices without hacking it or using addons.  All of that is fine, but I wanted to do a more vanilla demonstration for the time being.  Otherwise, that might be a better route to go than scaling units in and out of box2d and your renderer, but it depends.  See Erin Catto's (the creator of Box2D) thoughts on that [here](https://box2d.org/2011/12/pixels/).

Due to the size and intention of this demo (couple hours over the weekend), I did not follow Erin's advice exclusively; I still worked in pixels for the most part (it is, primarily, a PIXI demo).  Perhaps in the future I will extend this to use a proper unit system.

Drawing the debug lines is particularly slow, I could bug the PIXI guys on speeding that up.  I also iterated more than necessary I think, so optimizations can be found here.  Again, just trying to get it running, not trying to win any races. :)

I did some tentative testing with [pixi-viewport](https://github.com/davidfig/pixi-viewport/) and it seemed to work fine, however it was a quick hack, but that's something I will look into more later.  This would be ideal if you were interested in doing a scrolling game for example.
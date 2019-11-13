'use strict';

let ocean;
let button;
let space;
let button2;
let whistle;
let button3;
let balloon;
let button4;
let whale;
let button5;
let pNoise;
let playing;



function setup() {
  createCanvas(windowWidth, windowHeight);

  ocean = new p5.Noise();
  ocean.setType('pink');
  ocean.amp(0.1);

  button = createButton('Ocean  on/off');
  button.mousePressed(toggleOcean);
  button.position(100, 300);

  space = new p5.Oscillator('sine');
  space.setType();
  space.freq(30);
  space.amp(0.5);

  button2 = createButton('Space  on/off')
  button2.mousePressed(toggleSpace);
  button2.position(100, 350);

  whistle = new p5.Oscillator('sine');
  whistle.setType();
  whistle.freq(60);
  whistle.amp(0.2);

  button3 = createButton('Whistle  on/off')
  button3.mousePressed(toggleWhistle);
  button3.position(100, 400);

  balloon = new p5.Oscillator('sawtooth');
  balloon.setType();
  balloon.freq(600);
  balloon.amp(0.2);

  button4 = createButton('Balloon  on/off')
  button4.mousePressed(toggleBalloon);
  button4.position(100, 450);

  whale = new p5.Oscillator('sine');
  whale.setType();
  whale.freq(250);
  whale.amp(0.5);

  button5 = createButton('Whale  on/off')
  button5.mousePressed(toggleWhale);
  button5.position(100, 500);

}

function draw() {
  background(230, 215, 255);
  pNoise = noise(frameCount / 20) * 100;

  ocean.amp(map(sin(frameCount / 70), -1, 1, .05, .2));

  whistle.freq((0, 1200) + pNoise);
  whistle.amp(map(sin(frameCount / 40), -1, 1, .09, .1));

  balloon.freq((0, 1600) + pNoise);

  whale.freq((40, 250) + pNoise);
  whale.amp(sin(frameCount / 90), -1, 1, .05, .1);


}


function toggleOcean() {
  if (!playing) {
    ocean.start();
    playing = true;

  } else {
    ocean.stop();
    playing = false;
  }

}

function toggleSpace() {
  if (!playing) {
    space.start();
    playing = true;

  } else {
    space.stop();
    playing = false;
  }

}

function toggleWhistle() {
  if (!playing) {
    whistle.start();
    playing = true;

  } else {
    whistle.stop();
    playing = false;
  }

}

function toggleBalloon() {
  if (!playing) {
    balloon.start();
    playing = true;

  } else {
    balloon.stop();
    playing = false;
  }

}

function toggleWhale() {
  if (!playing) {
    whale.start();
    playing = true;

  } else {
    whale.stop();
    playing = false;
  }

}

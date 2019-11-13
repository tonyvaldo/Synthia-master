"use strict";

let osc;
let selectWaveform;
let pNoise;
let tileCount = 8;
let from;
let to;


function setup() {
  frameRate(6);
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');

  createSpan('waveform: ')
  selectWaveform = createSelect();
  selectWaveform.option('sine');
  selectWaveform.option('triangle');
  selectWaveform.option('sawtooth');
  selectWaveform.option('square');

noStroke();
colorMode(HSB);
  from = color(218, 165, 32);
  to = color(72, 61, 139);
}

function draw() {
  background(20);
  osc.setType(selectWaveform.value());

  // control frequency - audible range of frequency is 20-2000hz
  // add perlin noise for variance
  // next step: try creating a slider to control the multiplication value (set to a hundred now)
  pNoise = noise(frameCount / 20) * 100;
  // console.log(pNoise);
  osc.freq(map(mouseX, 0, width, 60, 2000) + pNoise);


  // sin wave goes from -1 to 1.
  // factor it is divided by slows it down
  // next step - now we lose mouse control for volume - how do you add that back in?
  // console.log(sin(frameCount / 50));
  osc.amp(map(sin(frameCount / 50), -1, 1, 0, .9));

  // to draw shape
  drawGrid();

}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

function drawGrid() {
  for (let i = 0; i < tileCount; i++) {
    for (let j = 0; j < tileCount; j++) {
      let posX = width / tileCount * i;
      let posY = width / tileCount * j;


      // console.log(map(mouseX, 0, width, 60, 2000) + pNoise);
      // let shiftX = i * windowHeight / mouseX;
      // let shiftY = j * windowHeight / mouseY;
      let shiftX = random(-mouseX, mouseX) / 20;
      let shiftY = random(-mouseY, mouseY) / 20;

      fill(lerpColor(from, to, i / tileCount));
      ellipse(posX + shiftX, posY + shiftY, mouseY / 8, mouseX / 8);

    }
  }
}

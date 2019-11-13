"use strict";

let osc;
let selectWaveform;
let pNoise;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');

  createSpan('waveform: ')
  selectWaveform = createSelect();
  selectWaveform.option('sine');
  selectWaveform.option('triangle');
  selectWaveform.option('sawtooth');
  selectWaveform.option('square');
}

function draw() {
  background(220);
  osc.setType(selectWaveform.value());

  // control frequency and volume with mouse - audible range of frequency is 20-2000hz
  // add perlin noise for variance - try creating a slider to control the multiplication
  // value (set to a hundred now)
  pNoise = noise(frameCount / 20) * 100;
  // console.log(pNoise);
  osc.freq(map(mouseX, 0, width, 60, 2000) + pNoise);
  osc.amp(map(mouseY, 0, height, 0.2, 0));

  // to draw shape
  // rect(50, 50, mouseX - 50, mouseY - 50);
}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

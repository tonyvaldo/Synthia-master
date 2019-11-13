"use strict";

let osc;
let selectWaveform;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');

// create dropdown to select waveform type
  createSpan('waveform: ')
  selectWaveform = createSelect();
  selectWaveform.option('sine');
  selectWaveform.option('triangle');
  selectWaveform.option('sawtooth');
  selectWaveform.option('square');
}

function draw() {
  background(220);

  // set oscillator type to dropdown
  osc.setType(selectWaveform.value());

  // control frequency and volume with mouse
  // audible range of frequency is 20-2000hz
  osc.freq(map(mouseX, 0, width, 60, 2000));
  osc.amp(map(mouseY, 0, height, 0.2, 0));

  // to draw shape
  // rect(50, 50, mouseX - 50, mouseY - 50);
  // next step - can you make this look like a theramin? https://www.youtube.com/watch?v=rdiYbCyQ4do
  // might need to have multitouch on mobile!! https://editor.p5js.org/dano/sketches/Sk1UY7tee

}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

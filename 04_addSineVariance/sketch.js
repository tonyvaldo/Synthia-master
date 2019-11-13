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

  // control frequency - audible range of frequency is 20-2000hz
  // add perlin noise for variance
  // next step: try creating a slider to control the multiplication value (set to a hundred now)
  pNoise = noise(frameCount / 20) * 100;
  // console.log(pNoise);
  osc.freq(map(mouseX, 0, width, 60, 2000) + pNoise);


  // sin wave goes from -1 to 1.
  // factor it is divided by slows it down
  // next step - now we lose mouse control for volume - how do you add that back in
  console.log(sin(frameCount / 50));
  osc.amp(map(sin(frameCount / 50), -1, 1, 0, .9));

  // to draw shape
  // rect(50, 50, mouseX - 50, mouseY - 50);

}

function mousePressed() {
  osc.start();
}

function mouseReleased() {
  osc.stop();
}

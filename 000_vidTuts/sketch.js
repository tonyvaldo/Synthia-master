'use strict';

let osc;
let waveFormSelect;
let pNoise;


function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.Oscillator('square');

  // create a dropdown menu to change osc type
  createSpan('Select waveform: ')
  waveFormSelect = createSelect();
  waveFormSelect.option('sine');
  waveFormSelect.option('sawtooth');
  waveFormSelect.option('square');
  waveFormSelect.option('triangle');
  waveFormSelect.changed(setWaveForm)


}

function draw() {

  pNoise = noise(frameCount / 20) * 100;
  osc.freq(map(mouseX, 0, width, 60, 1200) + pNoise);

  // osc.amp(map(mouseY, 0, height, .2, 0));
  osc.amp(map(sin(frameCount / 20), -1, 1, .05, .2));


}

function setWaveForm() {
  osc.setType(waveFormSelect.value());

}

function mousePressed() {
  osc.start();

}

function mouseReleased() {
  osc.stop()
}

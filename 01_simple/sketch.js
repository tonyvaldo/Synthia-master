"use strict";

let osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');

}

function draw() {
  background(220);

  // control frequency and volume with mouse
  // audible range of frequency is 20-2000hz
  osc.freq(map(mouseX, 0, width, 60, 2000));
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

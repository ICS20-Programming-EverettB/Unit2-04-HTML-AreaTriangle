
// Created by: Everett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  let length = parseFloat(document.getElementById('length-of-rectangle').value);
  let width = parseFloat(document.getElementById('width-of-rectangle').value);

  // process
  let area = length * width * 0.5;
  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}

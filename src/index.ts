import { sum } from './math';

const output = document.getElementById('output');
const nOutput = document.getElementById('nums');
const nums = [10, 10];

const numsOutput = nums.join(' + ');

nOutput.textContent = numsOutput;
output.textContent = String(sum(...nums));

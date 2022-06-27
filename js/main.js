import './data.js';
import './util.js';
import { createObject } from './data.js';

const photos = Array.from({length: 25}, createObject);
console.log(photos);

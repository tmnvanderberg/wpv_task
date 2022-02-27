import { stimuli } from "./stimuli.js";
import * as fileSystem from "fs";

export const getIndexes = (array, target) => {
  let indices = [];
  array.forEach((value, index) => {
    if (value.target === target) {
      indices.push(index);
    }
  });
  return indices;
};

export const rotateArray = (array) => {
  array.unshift(array.pop());
  return array;
};

export const rotateStimuli = (stimuli) => {
  let done = [];
  let rotatated_stimuli = stimuli;
  stimuli.forEach((stimulus) => {
    if (done.includes(stimulus.target)) {
      return;
    }
    done.push(stimulus.target);
    let indices = getIndexes(stimuli, stimulus.target);
    let entries = indices.map((index) => {
      return stimuli[index];
    });
    entries = rotateArray(entries);
    indices.forEach((index, idx) => {
      rotatated_stimuli[index] = entries[idx];
    });
  });
  return rotatated_stimuli;
};

const main = () => {
  let fileName = "original.json";
  const callback = () => console.log(`Finished writing ${fileName}.`);
  fileSystem.writeFile(
    fileName,
    JSON.stringify(stimuli, null, 4),
    "utf8",
    callback
  );
  [1, 2, 3, 4].forEach((n) => {
    let fileName = `rotated${n}.json`;
    fileSystem.writeFile(
      fileName,
      JSON.stringify(rotateStimuli(stimuli), null, 4),
      "utf8",
      callback
    );
  });
};

// main();

import * as fileSystem from "fs";

export const getIndxs = (array, target) => {
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

export const rotateEntries = (entries) => {
  return [
    ...rotateArray(entries.slice(0, 4)),
    ...rotateArray(entries.slice(4, 8)),
    ...rotateArray(entries.slice(8, 12)),
    ...rotateArray(entries.slice(12, 16)),
  ];
};

export const rotateStimuli = (stimuli) => {
  let done = [];
  let rotatated_stimuli = stimuli;
  stimuli.forEach((stimulus) => {
    if (done.includes(stimulus.target)) {
      return;
    }
    done.push(stimulus.target);
    let indices = getIndxs(stimuli, stimulus.target);
    let entries = indices.map((index) => {
      return stimuli[index];
    });
    let rotatedEntries = rotateEntries(entries);
    indices.forEach((index, idx) => {
      rotatated_stimuli[index] = rotatedEntries[idx];
    });
  });
  return rotatated_stimuli;
};

export const findIndicesUC = (stimuli, toSkip, num) => {
  let seenBefore = [];
  let found = [];
  stimuli.forEach((value, index) => {
    if (!toSkip.includes(index) && !seenBefore.includes(value.cond)) {
      seenBefore.push(value.cond);
      found.push(index);
      if (found.length == num) {
        return found;
      }
    }
  });
  return found;
};

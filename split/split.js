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

export const findIndicesUC = (stimuli, toSkip, num, target) => {
  let seenBefore = [];
  let found = [];
  stimuli.forEach((value, index) => {
    if (
      !toSkip.includes(index) &&
      !seenBefore.includes(value.cond) &&
      value.target === target
    ) {
      seenBefore.push(value.cond);
      found.push(index);
      if (found.length == num) {
        return found;
      }
    }
  });
  return found;
};

export const rotateStimuliUC = (stimuli) => {
  let doneTargets = [];
  let rotatedStimuli = stimuli;
  stimuli.forEach((stimulus) => {
    // if target was seen before, we skip it
    if (doneTargets.includes(stimulus.target)) {
      return;
    }

    let rotatedIndices = [];
    // each target is present 16 times in a file, we take 4 sets of 4 stimuli and rotate each set
    // internally. These are all the rotates for this target. BC is that each set has unique cond
    // values internally, i.e. each set of 4 stimuli has PHON, NONE, IDEN, SEM.
    for (let i = 0; i != 4; ++i) {
      // find four indices for this target with different "cond" values, ignoring indices that have
      // been rotated in a previous pass.
      const selectedIndices = findIndicesUC(
        stimuli,
        rotatedIndices,
        4,
        stimulus.target
      );
      // get the entries corresponding to the selected indices.
      const entries = selectedIndices.map((index) => {
        return stimuli[index];
      });
      const rotatedEntries = rotateEntries(entries);
      // place the shuffled entries back at in the stimuli data structure
      selectedIndices.forEach((stimIndex, arrIndex) => {
        rotatedStimuli[stimIndex] = rotatedEntries[arrIndex];
      });
      // keep track of shuffled indices, and finished targets.
      rotatedIndices = [...rotatedIndices, ...selectedIndices];
    }
    // keep track of targets we worked on.
    doneTargets.push(stimulus.target);
  });
  return rotatedStimuli;
};

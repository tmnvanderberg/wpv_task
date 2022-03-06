import { assert } from "console";
import { parseImage, parseText as parseWord } from "./translate.js";
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

export const rotateArrayCopy = (array) => {
  let copy = [...array];
  copy.unshift(copy.pop());
  return copy;
};

export const mapArray = (array) => {
  // these two arrays define a mapping between conditions
  const before = ["IDEN", "SEM", "NONE", "PHON"];
  const after = ["PHON", "IDEN", "SEM", "NONE"];
  let rotated = [...array];
  array.forEach((stimilus, stimulusIndex) => {
    const indexOfNewCondition = array.findIndex((stim) => {
      let condIndex = before.indexOf(stimilus.cond);
      let newcondIndex = after[condIndex];
      return stim.cond === newcondIndex;
    });
    rotated[stimulusIndex] = array[indexOfNewCondition];
  });
  return rotated;
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

// assumes we get a iterable container of index arrays that looks
// something like [[1,2,3,4], [4,5,7,8]]
export const rotateStimuliOverIndexSets = (stimuli, indexSets) => {
  let rotatedStimuli = stimuli;
  for (let indices of indexSets) {
    // we now have 4 indices with identical targets and different conditions
    const entries = indices.map((index) => {
      return stimuli[index];
    });
    // use the fixed map to determine the new order of the stimuli
    const mappedEntries = mapArray(entries);
    // overwrite entries at given indices
    indices.forEach((stimIndex, arrIndex) => {
      rotatedStimuli[stimIndex] = mappedEntries[arrIndex];
    });
  }
  return rotatedStimuli;
};

export const getIndexSets = (stimuli) => {
  let doneTargets = [];
  let indexSets = [];
  let rotatedIndices = [];
  stimuli.forEach((stimulus) => {
    // skip target if we treated it.
    if (doneTargets.includes(stimulus.target)) {
      return;
    }
    doneTargets.push(stimulus.target);
    // each target has 16 entries, we split into 4 sets ("rotation sets") with no repeating
    // conditions internally.
    [1, 2, 3, 4].forEach(() => {
      const selectedIndices = findIndicesUC(
        stimuli,
        rotatedIndices,
        4,
        stimulus.target
      );
      // we save the "rotation set" for the next rotation. Technically we don't need to flat
      // copy of the same data in rotatedIndices, but I'm too lazy to unpack the indexSets.
      indexSets.push(selectedIndices);
      rotatedIndices = [...rotatedIndices, ...selectedIndices];
    });
  });
  return indexSets;
};

const setImagePostFix = (image, newPostfix) => {
  const parsed = parseImage(image);
  return parsed.prefix + parsed.word + newPostfix;
};

const setWordPostFix = (word, newPostfix) => {
  const parsed = parseWord(word);
  return parsed.prefix + parsed.word + newPostfix;
};

export const setPostFix = (stimulus, imagePostFix, wordPostFix) => {
  stimulus.cue_image = setImagePostFix(stimulus.cue_image, imagePostFix);
  stimulus.target_image = setImagePostFix(stimulus.target_image, imagePostFix);
  stimulus.cue_word = setWordPostFix(stimulus.cue_word, wordPostFix);
  stimulus.target_word = setWordPostFix(stimulus.target_word, wordPostFix);
};

export const fixPostFixes = (stimuli) => {
  stimuli.forEach((stimulus, index) => {
    if (index < 80) {
      setPostFix(stimulus, "1.jpg", "CC.jpg");
    }
    if (index > 79 && index < 160) {
      setPostFix(stimulus, "2.jpg", "CS.jpg");
    }
    if (index > 159 && index < 240) {
      setPostFix(stimulus, "3.jpg", "TC.jpg");
    }
    if (index > 239 && index < 320) {
      setPostFix(stimulus, "4.jpg", "TS.jpg");
    }
  });
  return stimuli;
};

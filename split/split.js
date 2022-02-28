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
      let pic_word_con = rotatated_stimuli[index].pic_word_con;
      rotatated_stimuli[index] = entries[idx];
      rotatated_stimuli[index].pic_word_con = pic_word_con;
    });
  });
  return rotatated_stimuli;
};

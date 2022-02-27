const split = require("./split");

test("test rotate of array", () => {
  const rot1 = [4, 1, 2, 3];
  const rot2 = split.rotateArray([1, 2, 3, 4]);
  for (let i = 0; i != rot1.length; ++i) {
    expect(rot1[i]).toBe(rot2[i]);
  }
});

test("getIndices test", () => {
  const obj = [
    {
      id: 1,
      target: "dog",
    },
    {
      id: 2,
      target: "cat",
    },
    {
      id: 3,
      target: "doggy",
    },
    {
      id: 4,
      target: "dog",
    },
    {
      id: 5,
      target: "dkfskds",
    },
  ];
  const dog_indices = [0, 3];
  const got_indices = split.getIndxs(obj, "dog");
  expect(got_indices).toEqual(dog_indices);
});

test("test rotate of stimuli", () => {
  const stimuli = [
    {
      cue: "Schornstein",
      target: "Reis",
      cond: "PHON",
      cue_image: "img/Schornstein4.jpg",
      target_image: "img/Schwein4.jpg",
      cue_word: "img/SchornsteinTS.jpg",
      target_word: "img/SchweinTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "word-pic",
    },
    {
      cue: "Hemd",
      target: "Reis",
      cond: "SEM",
      cue_image: "img/Hemd4.jpg",
      target_image: "img/Knopf4.jpg",
      cue_word: "img/HemdTS.jpg",
      target_word: "img/KnopfTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "word-pic",
    },
    {
      cue: "Eis",
      target: "Reis",
      cond: "PHON",
      cue_image: "img/Eis4.jpg",
      target_image: "img/Reis4.jpg",
      cue_word: "img/EisTS.jpg",
      target_word: "img/ReisTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "pic-word",
    },
  ];
  const rotated_stimuli = [
    {
      cue: "Eis",
      target: "Reis",
      cond: "PHON",
      cue_image: "img/Eis4.jpg",
      target_image: "img/Reis4.jpg",
      cue_word: "img/EisTS.jpg",
      target_word: "img/ReisTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "pic-word",
    },
    {
      cue: "Schornstein",
      target: "Reis",
      cond: "PHON",
      cue_image: "img/Schornstein4.jpg",
      target_image: "img/Schwein4.jpg",
      cue_word: "img/SchornsteinTS.jpg",
      target_word: "img/SchweinTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "word-pic",
    },
    {
      cue: "Hemd",
      target: "Reis",
      cond: "SEM",
      cue_image: "img/Hemd4.jpg",
      target_image: "img/Knopf4.jpg",
      cue_word: "img/HemdTS.jpg",
      target_word: "img/KnopfTS.jpg",
      correct_resp: "n",
      trial_part: "main",
      pic_word_con: "word-pic",
    },
  ];
  expect(split.rotateStimuli(stimuli)).toEqual(rotated_stimuli);
});

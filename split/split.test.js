import {
  rotateArray,
  getIndxs,
  rotateStimuli,
  rotateEntries,
  findIndicesUC,
} from "./split.js";
import {
  toGerman,
  toEnglish,
  parseImage,
  parseText,
  translateImage,
  translateText,
  translateStimulus,
} from "./translate.js";

test("test rotate of array", () => {
  const rot1 = [4, 1, 2, 3];
  const rot2 = rotateArray([1, 2, 3, 4]);
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
  const got_indices = getIndxs(obj, "dog");
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
  expect(rotateStimuli(stimuli)).toEqual(rotated_stimuli);
});

test("translate to german", () => {
  const translated = ["leek", "monkey", "coffee"].map((word) => {
    return toGerman(word);
  });
  expect(translated).toEqual(["lauch", "affe", "kaffee"]);
});

test("translate to english", () => {
  const translated = ["kaffee", "lauch", "affe"].map((word) => {
    return toEnglish(word);
  });
  expect(translated).toEqual(["coffee", "leek", "monkey"]);
});

test("parse image name", () => {
  const imageName = "img/Zwiebel3.jpg";
  expect(parseImage(imageName)).toEqual({
    prefix: "img/",
    word: "Zwiebel",
    postfix: "3.jpg",
  });
});

test("parse text name", () => {
  const imageName = "img/ZwiebelTC.jpg";
  expect(parseText(imageName)).toEqual({
    prefix: "img/",
    word: "Zwiebel",
    postfix: "TC.jpg",
  });
});

test("translateImage", () => {
  const imageName = "img/Kleid1.jpg";
  expect(translateImage(imageName)).toEqual("img/dress1.jpg");
});

test("translateText", () => {
  const textName = "img/SchlagzeugTC.jpg";
  expect(translateText(textName)).toEqual("img/drumsTC.jpg");
});

test("translate stimulus", () => {
  const stimulus = {
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
  };
  const translated = {
    cue: "Hemd",
    target: "Reis",
    cond: "SEM",
    cue_image: "img/shirt4.jpg",
    target_image: "img/button4.jpg",
    cue_word: "img/shirtTS.jpg",
    target_word: "img/buttonTS.jpg",
    correct_resp: "n",
    trial_part: "main",
    pic_word_con: "word-pic",
  };
  expect(translateStimulus(stimulus)).toEqual(translated);
});

test("rotateEntries1", () => {
  let entries = [1, 2, 3, 4, 5, 6, 7, 8];
  let rotated = [4, 1, 2, 3, 8, 5, 6, 7];
  let rot_entries = [
    ...rotateArray(entries.slice(0, 4)),
    ...rotateArray(entries.slice(4, 8)),
  ];
  console.log(rot_entries);
  expect(rot_entries).toEqual(rotated);
});

test("rotateEntries", () => {
  let entries = [];
  for (let i = 0; i != 16; ++i) {
    entries[i] = i + 1;
  }
  let rotated = [4, 1, 2, 3, 8, 5, 6, 7, 12, 9, 10, 11, 16, 13, 14, 15];
  let rot_entries = rotateEntries(entries);
  expect(rot_entries).toEqual(rotated);
});

test("findIndicesWithUniqueCondition", () => {
  const stimuli = [
    { cond: "P", target: "test" },
    { cond: "S", target: "test" },
    { cond: "P", target: "test" },
    { cond: "I", target: "test" },
    { cond: "N", target: "test" },
  ];
  const selected = findIndicesUC(stimuli, [], 4, "test");
  expect(selected).toEqual([0, 1, 3, 4]);
});

test("findIndicesWithUniqueCondition twice", () => {
  const stimuli = [
    { cond: "P", target: "test" },
    { cond: "S", target: "test" },
    { cond: "P", target: "test" },
    { cond: "I", target: "test" },
    { cond: "N", target: "test" },
    { cond: "S", target: "test" },
    { cond: "I", target: "test" },
    { cond: "N", target: "test" },
  ];
  const selected = findIndicesUC(stimuli, [], 4, "test");
  expect(selected).toEqual([0, 1, 3, 4]);
  const selected_two = findIndicesUC(stimuli, selected, 4, "test");
  expect(selected_two).toEqual([2, 5, 6, 7]);
});

test("findIndicesWithUniqueCondition /w target", () => {
  const stimuli = [
    { cond: "P", target: "test" },
    { cond: "S", target: "dog" },
    { cond: "P", target: "test" },
    { cond: "I", target: "test" },
    { cond: "N", target: "dog" },
    { cond: "S", target: "test" },
    { cond: "I", target: "dog" },
    { cond: "N", target: "test" },
  ];
  const selected = findIndicesUC(stimuli, [], 4, "test");
  expect(selected).toEqual([0, 3, 5, 7]);
});

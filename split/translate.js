import { translations } from "./translations.js";

export const toEnglish = (germanWord) => {
  for (const entry of translations) {
    if (entry.german === germanWord) {
      return entry.english;
    }
  }
  throw `No translation found for ${germanWord}.`;
};

export const toGerman = (englishWord) => {
  for (const entry of translations) {
    if (entry.english === englishWord) {
      return entry.german;
    }
  }
  throw "No translation found.";
};

export const parseImage = (image) => {
  const prefix = image.slice(0, 4);
  const word = image.slice(4, -5);
  const postfix = image.slice(-5, image.length);
  return { prefix: prefix, word: word, postfix: postfix };
};

export const parseText = (text) => {
  const prefix = text.slice(0, 4);
  const word = text.slice(4, -6);
  const postfix = text.slice(-6, text.length);
  return { prefix: prefix, word: word, postfix: postfix };
};

export const translateImage = (image) => {
  let parsed = parseImage(image);
  let word = toEnglish(parsed.word.toLowerCase());
  return parsed.prefix + word + parsed.postfix;
};

export const translateText = (image) => {
  let parsed = parseText(image);
  let word = toEnglish(parsed.word.toLowerCase());
  return parsed.prefix + word + parsed.postfix;
};

export const translateStimulus = (stimulus) => {
  stimulus.cue_image = translateImage(stimulus.cue_image);
  stimulus.target_image = translateImage(stimulus.target_image);
  stimulus.cue_word = translateText(stimulus.cue_word);
  stimulus.target_word = translateText(stimulus.target_word);
  return stimulus;
};

export const translateStimuli = (stimuli) => {
  return stimuli.map((stimulus) => {
    return translateStimulus(stimulus);
  });
};

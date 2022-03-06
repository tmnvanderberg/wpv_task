import {
  getIndexSets,
  rotateStimuliOverIndexSets,
  fixPostFixes,
} from "./split.js";
import * as fileSystem from "fs";
import { stimuli } from "./stimuli.js";
import { translateStimuli } from "./translate.js";

const write = (fileName, object) => {
  const callback = () => console.log(`Finished writing ${fileName}.`);
  fileSystem.writeFile(
    fileName,
    JSON.stringify(object, null, 4),
    "utf8",
    callback
  );
};

const main = () => {
  const translatedStimuli = fixPostFixes(translateStimuli(stimuli));
  const indexSets = getIndexSets(translatedStimuli);
  write(`original.json`, translatedStimuli);
  [1, 2, 3, 4].forEach((n) => {
    write(
      `rotated${n}.json`,
      fixPostFixes(rotateStimuliOverIndexSets(translatedStimuli, indexSets))
    );
  });
};

main();

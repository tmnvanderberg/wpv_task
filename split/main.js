import { rotateStimuliUC } from "./split.js";
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
  let translatedStimuli = translateStimuli(stimuli);
  write(`original.json`, translatedStimuli);
  [1, 2, 3].forEach((n) => {
    write(`rotated${n}.json`, rotateStimuliUC(translatedStimuli));
  });
};

main();

import { rotateStimuli } from "./split.js";
import * as fileSystem from "fs";
import { stimuli } from "./stimuli.js";

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
  write(`original.json`, stimuli);
  [1, 2, 3, 4].forEach((n) => {
    write(`rotated${n}.json`, rotateStimuli(stimuli));
  });
};

main();

import { stimuli } from "./stimuli.js";
import * as fileSystem from "fs";

const rotateCondition = (cond) => {
  switch (cond) {
    case "IDEN":
      return "PHON";
    case "PHON":
      return "NONE";
    case "NONE":
      return "SEM";
    case "SEM":
      return "IDEN";
  }
};

const rotateStimuli = (stimuli) => {
  let rotatated_stimulus = stimuli.map((stimulus) => {
    stimulus.cond = rotateCondition(stimulus.cond);
    return stimulus;
  });
  return rotatated_stimulus;
};

[1, 2, 3, 4].forEach((n) => {
  let fileName = `rotated${n}.json`;
  fileSystem.writeFile(
    fileName,
    JSON.stringify(rotateStimuli(stimuli), null, 4),
    "utf8",
    () => console.log(`Finished writing ${fileName}.`)
  );
});

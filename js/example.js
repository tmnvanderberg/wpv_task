const stimuli_array = [{
    cue: "Stiefel",
    target: "Tasche",
    cond: "cat+ass",
    task_part: "main",
    stimuli: [
        {
            cue_image: "img/bootTS.jpg",
            target_image: "img/bag3.jpg"
        },
        {
            cue_image: "img/bootSDKFJS.jpg",
            target_image: "img/dsfkjfd.jpg"
        }

    ]
},
{
    cue: "Stiefel",
    target: "Tasche",
    cond: "cat+ass",
    task_part: "main",
    stimuli: [
        {
            cue_image: "img/bootTS.jpg",
            target_image: "img/bag3.jpg"
        },
        {
            cue_image: "img/bootSDKFJS.jpg",
            target_image: "img/dsfkjfd.jpg"
        }

    ]
}
]


// if you have as above
for (const [index, entry] of stimuli_array) {

    first = entry.stimuli[0];
    second = entry.stimuli[1];
    third = entry.stimuli[2];
    fourth = entry.stimuli[3];
    ret = [first, second, third, fourth]
    // fourth
    // display code
    // shuffle :
    // [first, second, third, fourth] -> [second, third, fourth, first]
    shuffle = (arr) => { arr.push(arr.shift()); }
    // we want to shuffle (index % 4) = oneOf(0, 1, 2, 3) times
    shuffle_n = (arr, n) => { 
        for (i = 0; i != n % 4; ++i) {
            shuffle(arr)
        }
    }
    // is who wants to use the list of stimuli.
    var to_show = shuffle_n(ret, index);      
}

// next one second third fourth first

// for flat json file
// const myQue = "Stiefel";
// stimuli_array.filter((entry) => { entry.cue === myCue });

# old:
{
    cue: "Wachs",
    target: "Dachs",
    cond: "phon",
    cue_image: "img/wax1.jpg",
    target_image: "img/badger1.jpg",
    task_part: "main"
},

# what we want: 
{
    correct_response                                (condition == IDEM ? match : nonmatch)
    trial_part: { main, practice }                  everything main
    pic_word_cond: { word-pic, pic-word }           (first 160 pic-word, second 160 word-pic)
    appearance                                      add for target and cue.
    cue_image                                       (cue, img_dir, apperance of cue)
    cue_word                                        (cue, img_dir, apperance of cue)
    target_image                                    (target, img_dir, appearance of target)
    target_word                                     (target, img_dir, appearance of target)
}

Horn            Reis            NONE       1        
Hammer          Suppe           NONE       1

# image_example for target:
{
    target: katze
    img_dir: /img/
    appearance: 1
} =>
{
    target_image: /img/cat1.jpg
}

image steps:
- (target) : target_english
- img_dir + target_english + ".jpg"


# general order
- add correct response
- add trial part
- add cond 


# for a specific target, we have 16 entries...
[
    P,-
    N,-
    S,-
    N, *
    P, *
    I,-
    N,
    I *
    P
    S *
    N
    I
    N
    S
    S
]
# to create "rotation sets", I grab items that don't have the same condition...
[ ]
[0]
[0, 1]
[0, 1, 2]
[0, 1, 2, 5] <- "rotation set"
[]
[3]
[3,4]


#
first 80 stimuli
{
    "cue_image": "img/tram1.jpg",
    "target_image": "img/tram1.jpg",
    "cue_word": "img/tramCC.jpg",
    "target_word": "img/tramCC.jpg",
}
second 80 stimuli
{
    "cue_image": "img/tram2.jpg",
    "target_image": "img/tram2.jpg",
    "cue_word": "img/tramCS.jpg",
    "target_word": "img/tramCS.jpg",
}
third 80 stimuli
{
    "cue_image": "img/tram3.jpg",
    "target_image": "img/tram3.jpg",
    "cue_word": "img/tramTC.jpg",
    "target_word": "img/tramTC.jpg",
}
fourth 80 stimuli
{
    "cue_image": "img/tram4.jpg",
    "target_image": "img/tram4.jpg",
    "cue_word": "img/tramTS.jpg",
    "target_word": "img/tramTS.jpg",
}


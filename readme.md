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


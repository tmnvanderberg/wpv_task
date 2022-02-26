const stimuli = [
    {
      cue: "Wachs",
      target: "Dachs",
      cond: "phon",
      cue_image: "img/wax1.jpg",
      target_image: "img/badger1.jpg",
      task_part: "main"
    },
    {
      cue: "Baer",
      target: "Dachs",
      cond: "cat+ass",
      cue_image: "img/bear1.jpg",
      target_image: "img/badger1.jpg",
      task_part: "main"
    },
    {
      cue: "Kamm",
      target: "Dachs",
      cond: "none",
      cue_image: "img/comb1.jpg",
      target_image: "img/badger1.jpg",
      task_part: "main"
    },
    {
      cue: "Dachs",
      target: "Dachs",
      cond: "iden",
      cue_image: "img/badger1.jpg",
      target_image: "img/badger1.jpg",
      task_part: "main"
    },
    {
      cue: "Puppe",
      target: "Suppe",
      cond: "phon",
      cue_image: "img/puppet1.jpg",
      target_image: "img/soup1.jpg",
      task_part: "main"
    },
    {
      cue: "Zwiebel",
      target: "Suppe",
      cond: "cat+ass",
      cue_image: "img/onion1.jpg",
      target_image: "img/soup1.jpg",
      task_part: "main"
    },
    {
      cue: "Hammer",
      target: "Suppe",
      cond: "none",
      cue_image: "img/hammer1.jpg",
      target_image: "img/soup1.jpg",
      task_part: "main"
    },
    {
      cue: "Suppe",
      target: "Suppe",
      cond: "iden",
      cue_image: "img/soup1.jpg",
      target_image: "img/soup1.jpg",
      task_part: "main"
    },
    {
      cue: "Kuh",
      target: "Schuh",
      cond: "phon",
      cue_image: "img/cow1.jpg",
      target_image: "img/shoe1.jpg",
      task_part: "main"
    },
    {
      cue: "Kleid",
      target: "Schuh",
      cond: "cat+ass",
      cue_image: "img/dress1.jpg",
      target_image: "img/shoe1.jpg",
      task_part: "main"
    },
    {
      cue: "Nest",
      target: "Schuh",
      cond: "none",
      cue_image: "img/nest1.jpg",
      target_image: "img/shoe1.jpg",
      task_part: "main"
    },
    {
      cue: "Schuh",
      target: "Schuh",
      cond: "iden",
      cue_image: "img/shoe1.jpg",
      target_image: "img/shoe1.jpg",
      task_part: "main"
    },
    {
      cue: "Bauch",
      target: "Lauch",
      cond: "phon",
      cue_image: "img/stomach1.jpg",
      target_image: "img/leek1.jpg",
      task_part: "main"
    },
    {
      cue: "Kohl",
      target: "Lauch",
      cond: "cat+ass",
      cue_image: "img/cabbage1.jpg",
      target_image: "img/leek1.jpg",
      task_part: "main"
    },
    {
      cue: "Schiff",
      target: "Lauch",
      cond: "none",
      cue_image: "img/ship1.jpg",
      target_image: "img/leek1.jpg",
      task_part: "main"
    },
    {
      cue: "Lauch",
      target: "Lauch",
      cond: "iden",
      cue_image: "img/leek1.jpg",
      target_image: "img/leek1.jpg",
      task_part: "main"
    },
    {
      cue: "Schornstein",
      target: "Schwein",
      cond: "phon",
      cue_image: "img/chimney1.jpg",
      target_image: "img/pig1.jpg",
      task_part: "main"
    },
    {
      cue: "Ziege",
      target: "Schwein",
      cond: "cat+ass",
      cue_image: "img/goat1.jpg",
      target_image: "img/pig1.jpg",
      task_part: "main"
    },
    {
      cue: "Pfanne",
      target: "Schwein",
      cond: "none",
      cue_image: "img/pan1.jpg",
      target_image: "img/pig1.jpg",
      task_part: "main"
    },
    {
      cue: "Schwein",
      target: "Schwein",
      cond: "iden",
      cue_image: "img/pig1.jpg",
      target_image: "img/pig1.jpg",
      task_part: "main"
    },
    {
      cue: "Schraube",
      target: "Traube",
      cond: "phon",
      cue_image: "img/screw1.jpg",
      target_image: "img/grape1.jpg",
      task_part: "main"
    },
    {
      cue: "Apfel",
      target: "Traube",
      cond: "cat+ass",
      cue_image: "img/apple1.jpg",
      target_image: "img/grape1.jpg",
      task_part: "main"
    },
    {
      cue: "Fussball",
      target: "Traube",
      cond: "none",
      cue_image: "img/football1.jpg",
      target_image: "img/grape1.jpg",
      task_part: "main"
    },
    {
      cue: "Traube",
      target: "Traube",
      cond: "iden",
      cue_image: "img/grape1.jpg",
      target_image: "img/grape1.jpg",
      task_part: "main"
    },
    {
      cue: "Topf",
      target: "Knopf",
      cond: "phon",
      cue_image: "img/pot1.jpg",
      target_image: "img/button1.jpg",
      task_part: "main"
    },
    {
      cue: "Hemd",
      target: "Knopf",
      cond: "cat+ass",
      cue_image: "img/shirt1.jpg",
      target_image: "img/button1.jpg",
      task_part: "main"
    },
    {
      cue: "Gras",
      target: "Knopf",
      cond: "none",
      cue_image: "img/grass1.jpg",
      target_image: "img/button1.jpg",
      task_part: "main"
    },
    {
      cue: "Knopf",
      target: "Knopf",
      cond: "iden",
      cue_image: "img/button1.jpg",
      target_image: "img/button1.jpg",
      task_part: "main"
    },
    {
      cue: "Eis",
      target: "Reis",
      cond: "phon",
      cue_image: "img/ice1.jpg",
      target_image: "img/rice1.jpg",
      task_part: "main"
    },
    {
      cue: "Mehl",
      target: "Reis",
      cond: "cat+ass",
      cue_image: "img/flour1.jpg",
      target_image: "img/rice1.jpg",
      task_part: "main"
    },
    {
      cue: "Horn",
      target: "Reis",
      cond: "none",
      cue_image: "img/horn1.jpg",
      target_image: "img/rice1.jpg",
      task_part: "main"
    },
    {
      cue: "Reis",
      target: "Reis",
      cond: "iden",
      cue_image: "img/rice1.jpg",
      target_image: "img/rice1.jpg",
      task_part: "main"
    },
    {
      cue: "Schwert",
      target: "Pferd",
      cond: "phon",
      cue_image: "img/sword1.jpg",
      target_image: "img/horse1.jpg",
      task_part: "main"
    },
    {
      cue: "Hirsch",
      target: "Pferd",
      cond: "cat+ass",
      cue_image: "img/deer1.jpg",
      target_image: "img/horse1.jpg",
      task_part: "main"
    },
    {
      cue: "Zahn",
      target: "Pferd",
      cond: "none",
      cue_image: "img/tooth1.jpg",
      target_image: "img/horse1.jpg",
      task_part: "main"
    },
    {
      cue: "Pferd",
      target: "Pferd",
      cond: "iden",
      cue_image: "img/horse1.jpg",
      target_image: "img/horse1.jpg",
      task_part: "main"
    },
    {
      cue: "Tisch",
      target: "Fisch",
      cond: "phon",
      cue_image: "img/table1.jpg",
      target_image: "img/fish1.jpg",
      task_part: "main"
    },
    {
      cue: "Hund",
      target: "Fisch",
      cond: "cat+ass",
      cue_image: "img/dog1.jpg",
      target_image: "img/fish1.jpg",
      task_part: "main"
    },
    {
      cue: "Brot",
      target: "Fisch",
      cond: "none",
      cue_image: "img/bread1.jpg",
      target_image: "img/fish1.jpg",
      task_part: "main"
    },
    {
      cue: "Fisch",
      target: "Fisch",
      cond: "iden",
      cue_image: "img/fish1.jpg",
      target_image: "img/fish1.jpg",
      task_part: "main"
    },
    {
      cue: "Klee",
      target: "Tee",
      cond: "phon",
      cue_image: "img/clover1.jpg",
      target_image: "img/tea1.jpg",
      task_part: "main"
    },
    {
      cue: "Bier",
      target: "Tee",
      cond: "cat+ass",
      cue_image: "img/beer1.jpg",
      target_image: "img/tea1.jpg",
      task_part: "main"
    },
    {
      cue: "Maus",
      target: "Tee",
      cond: "none",
      cue_image: "img/mouse1.jpg",
      target_image: "img/tea1.jpg",
      task_part: "main"
    },
    {
      cue: "Tee",
      target: "Tee",
      cond: "iden",
      cue_image: "img/tea1.jpg",
      target_image: "img/tea1.jpg",
      task_part: "main"
    },
    {
      cue: "Rose",
      target: "Hose",
      cond: "phon",
      cue_image: "img/rose1.jpg",
      target_image: "img/trousers1.jpg",
      task_part: "main"
    },
    {
      cue: "Anzug",
      target: "Hose",
      cond: "cat+ass",
      cue_image: "img/suit1.jpg",
      target_image: "img/trousers1.jpg",
      task_part: "main"
    },
    {
      cue: "Fahrrad",
      target: "Hose",
      cond: "none",
      cue_image: "img/bicycle1.jpg",
      target_image: "img/trousers1.jpg",
      task_part: "main"
    },
    {
      cue: "Hose",
      target: "Hose",
      cond: "iden",
      cue_image: "img/pants1.jpg",
      target_image: "img/trousers1.jpg",
      task_part: "main"
    },
    {
      cue: "Pantoffel",
      target: "Kartoffel",
      cond: "phon",
      cue_image: "img/slipper1.jpg",
      target_image: "img/potato1.jpg",
      task_part: "main"
    },
    {
      cue: "Schnitzel",
      target: "Kartoffel",
      cond: "cat+ass",
      cue_image: "img/schnitzel1.jpg",
      target_image: "img/potato1.jpg",
      task_part: "main"
    },
    {
      cue: "Pelikan",
      target: "Kartoffel",
      cond: "none",
      cue_image: "img/pelican1.jpg",
      target_image: "img/potato1.jpg",
      task_part: "main"
    },
    {
      cue: "Kartoffel",
      target: "Kartoffel",
      cond: "iden",
      cue_image: "img/potato1.jpg",
      target_image: "img/potato1.jpg",
      task_part: "main"
    },
    {
      cue: "Pedal",
      target: "Wal",
      cond: "phon",
      cue_image: "img/pedal1.jpg",
      target_image: "img/whale1.jpg",
      task_part: "main"
    },
    {
      cue: "Otter",
      target: "Wal",
      cond: "cat+ass",
      cue_image: "img/otter1.jpg",
      target_image: "img/whale1.jpg",
      task_part: "main"
    },
    {
      cue: "Gurke",
      target: "Wal",
      cond: "none",
      cue_image: "img/cucumber1.jpg",
      target_image: "img/whale1.jpg",
      task_part: "main"
    },
    {
      cue: "Wal",
      target: "Wal",
      cond: "iden",
      cue_image: "img/whale1.jpg",
      target_image: "img/whale1.jpg",
      task_part: "main"
    },
    {
      cue: "Bein",
      target: "Wein",
      cond: "phon",
      cue_image: "img/leg1.jpg",
      target_image: "img/wine1.jpg",
      task_part: "main"
    },
    {
      cue: "Saft",
      target: "Wein",
      cond: "cat+ass",
      cue_image: "img/juice1.jpg",
      target_image: "img/wine1.jpg",
      task_part: "main"
    },
    {
      cue: "Zelt",
      target: "Wein",
      cond: "none",
      cue_image: "img/tent1.jpg",
      target_image: "img/wine1.jpg",
      task_part: "main"
    },
    {
      cue: "Wein",
      target: "Wein",
      cond: "iden",
      cue_image: "img/wine1.jpg",
      target_image: "img/wine1.jpg",
      task_part: "main"
    },
    {
      cue: "Schnee",
      target: "Kaffee",
      cond: "phon",
      cue_image: "img/snow1.jpg",
      target_image: "img/coffee1.jpg",
      task_part: "main"
    },
    {
      cue: "Milch",
      target: "Kaffee",
      cond: "cat+ass",
      cue_image: "img/milk1.jpg",
      target_image: "img/coffee1.jpg",
      task_part: "main"
    },
    {
      cue: "Hut",
      target: "Kaffee",
      cond: "none",
      cue_image: "img/hat1.jpg",
      target_image: "img/coffee1.jpg",
      task_part: "main"
    },
    {
      cue: "Kaffee",
      target: "Kaffee",
      cond: "iden",
      cue_image: "img/coffee1.jpg",
      target_image: "img/coffee1.jpg",
      task_part: "main"
    },
    {
      cue: "Schlagzeug",
      target: "Flugzeug",
      cond: "phon",
      cue_image: "img/drums1.jpg",
      target_image: "img/plane1.jpg",
      task_part: "main"
    },
    {
      cue: "Ballon",
      target: "Flugzeug",
      cond: "cat+ass",
      cue_image: "img/balloon1.jpg",
      target_image: "img/plane1.jpg",
      task_part: "main"
    },
    {
      cue: "Affe",
      target: "Flugzeug",
      cond: "none",
      cue_image: "img/monkey1.jpg",
      target_image: "img/plane1.jpg",
      task_part: "main"
    },
    {
      cue: "Flugzeug",
      target: "Flugzeug",
      cond: "iden",
      cue_image: "img/airplane1.jpg",
      target_image: "img/plane1.jpg",
      task_part: "main"
    },
    {
      cue: "Schwan",
      target: "Strassenbahn",
      cond: "phon",
      cue_image: "img/swan1.jpg",
      target_image: "img/tram1.jpg",
      task_part: "main"
    },
    {
      cue: "Bus",
      target: "Strassenbahn",
      cond: "cat+ass",
      cue_image: "img/bus1.jpg",
      target_image: "img/tram1.jpg",
      task_part: "main"
    },
    {
      cue: "Huhn",
      target: "Strassenbahn",
      cond: "none",
      cue_image: "img/chicken1.jpg",
      target_image: "img/tram1.jpg",
      task_part: "main"
    },
    {
      cue: "Strassenbahn",
      target: "Strassenbahn",
      cond: "iden",
      cue_image: "img/tram1.jpg",
      target_image: "img/tram1.jpg",
      task_part: "main"
    },
    {
      cue: "Tapete",
      target: "Rakete",
      cond: "phon",
      cue_image: "img/wallpaper1.jpg",
      target_image: "img/rocket1.jpg",
      task_part: "main"
    },
    {
      cue: "Hubschrauber",
      target: "Rakete",
      cond: "cat+ass",
      cue_image: "img/helicopter1.jpg",
      target_image: "img/rocket1.jpg",
      task_part: "main"
    },
    {
      cue: "Elefant",
      target: "Rakete",
      cond: "none",
      cue_image: "img/elephant1.jpg",
      target_image: "img/rocket1.jpg",
      task_part: "practice"
    },
    {
      cue: "Rakete",
      target: "Rakete",
      cond: "iden",
      cue_image: "img/rocket1.jpg",
      target_image: "img/rocket1.jpg",
      task_part: "practice"
    },
    {
      cue: "Flasche",
      target: "Tasche",
      cond: "phon",
      cue_image: "img/bottle1.jpg",
      target_image: "img/bag1.jpg",
      task_part: "main"
    },
    {
      cue: "Stiefel",
      target: "Tasche",
      cond: "cat+ass",
      cue_image: "img/boot1.jpg",
      target_image: "img/bag1.jpg",
      task_part: "main"
    },
    {
      cue: "Löffel",
      target: "Tasche",
      cond: "none",
      cue_image: "img/spoon1.jpg",
      target_image: "img/bag1.jpg",
      task_part: "practice"
    },
    {
      cue: "Tasche",
      target: "Tasche",
      cond: "iden",
      cue_image: "img/bag1.jpg",
      target_image: "img/bag1.jpg",
      task_part: "practice"
    }
  ]
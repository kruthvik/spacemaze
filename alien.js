const aliens = $(".alien");
const blur = $("#blur")

let current = 0;
let correct = 0;

let alreadySelected = [];
let question;
let questions =
  [
    {
      t: "Which of the following is a planet in our solar system?",
      o1: "Andromeda",
      o2: "Betelgeuse",
      o3: "Jupiter",
      o4: "Orion",
      c: 3,
    },
    {
      t: "What causes the seasons on Earth?",
      o1: "The distance from the Sun",
      o2: "The tilt of Earth's axis",
      o3: "The rotation of the Moon",
      o4: "The size of Earth's orbit",
      c: 2,
    },
    {
      t: "What is a constellation?",
      o1: "A type of galaxy",
      o2: "A group of planets",
      o3: "A pattern of stars in the sky",
      o4: "A type of asteroid",
      c: 3,
    },
    {
      t: "What is the name of the largest planet in our solar system?",
      o1: "Mars",
      o2: "Venus",
      o3: "Jupiter",
      o4: "Neptune",
      c: 3,
    },
    {
      t: "What is the name of the force that keeps planets in orbit around the Sun?",
      o1: "Gravity",
      o2: "Electromagnetism",
      o3: "Radiation",
      o4: "Pressure",
      c: 1,
    },
    {
      t: "What is the name of the natural satellite of Earth?",
      o1: "Mars",
      o2: "Venus",
      o3: "Neptune",
      o4: "The Moon",
      c: 4,
    },
    {
      t: "What is a black hole?",
      o1: "A planet with no atmosphere",
      o2: "A star that has exploded",
      o3: "A region of space with extreme gravity",
      o4: "A type of galaxy",
      c: 3,
    },
    {
      t: "What is the name of the galaxy that contains our solar system?",
      o1: "Andromeda",
      o2: "Milky Way",
      o3: "Black Eye",
      o4: "Whirlpool",
      c: 2,
    },
    {
      t: "What is a meteor?",
      o1: "A planet orbiting the Sun",
      o2: "A type of galaxy",
      o3: "A shooting star",
      o4: "Hurricane",
      c: 3,
    },
    {
      t: "What is a comet?",
      o1: "A type of asteroid",
      o2: "A small planet",
      o3: "A ball of ice and dust",
      o4: "A type of star",
      c: 3,
    },
    {
      t: "When did Galileo discover Jupiter",
      o1: "1602",
      o2: "1792",
      o3: "1242",
      o4: "1610",
      c: 4,
    },
    {
      t: "Which planet is called the red planet?",
      o1: "Earth",
      o2: "Uranus",
      o3: "Mars",
      o4: "Mercury",
      c: 3,
    },
    {
      t: "Which of the following has no rings?",
      o1: "Mars",
      o2: "Jupiter",
      o3: "Uranus",
      o4: "Neptune",
      c: 1,
    },
    {
      t: "How many planets are there in the Solar System in TOTAL?",
      o1: "7",
      o2: "9",
      o3: "10",
      o4: "8",
      c: 4,
    },
    {
      t: "What is Neptune named after?",
      o1: "God of Sea - Greek",
      o2: "God of Lightning - Roman",
      o3: "God of Sea - Roman",
      o4: "God of Farming - Egypt",
      c: 3,
    },
    {
      t: "What is the coldest planet?",
      o1: "Neptune",
      o2: "Uranus",
      o3: "Pluto",
      o4: "Jupiter",
      c: 1,
    },
    {
      t: "What is the storm on Jupiter called?",
      o1: "The Great Blue Spot",
      o2: "The Great Red Spot",
      o3: "The Green Goblin",
      o4: "Jupiterious Storm",
      c: 2,
    },
    {
      t: "What Saturn named after?",
      o1: "The Greek God of Hearth",
      o2: "The Egyptian God of the Sun",
      o3: "The Greek Sea God",
      o4: "The Roman God of Agriculture",
      c: 4,
    },
    {
      t: "Which planet has the lowest density?",
      o1: "Mercury",
      o2: "Venus",
      o3: "Saturn",
      o4: "Jupiter",
      c: 3,
    },
    {
      t: "What is Uranus???s axis of rotation?",
      o1: "25 degrees",
      o2: "180 degrees",
      o3: "0 degrees",
      o4: "90 degrees",
      c: 4,
    },
  ]

aliens.each(function (_i) {
    console.log(this)
    $(this).on("click", function () {
        let id = $(this).attr("id").slice(1);
        
        if (correct + 1 != id) {
            return
        }
        
        blur.removeClass("inv")

        let i = Math.floor(Math.random() * questions.length);
        question = questions[i]
        console.log(questions.length);

        $("#title").text(question.t)

        $("#a").text(question.o1)
        $("#b").text(question.o2)
        $("#c").text(question.o3)
        $("#d").text(question.o4)
    });
})

$("#a, #b, #c, #d").each(function () {
    $(this).on("click", function () {
        let id = $(this).attr("data-number");
        
        console.log(question.c)

        if (id != question.c) {
            if (current > 0) {
                current --;
            }
        } else {
            current ++;
            if (current > 4) {
                current = 0;
                correct ++;

                if (correct == 7) {
                    window.location = 2
                }

                blur.addClass("inv");
            }
        }

        question =
            questions[
            Math.floor(Math.random() * questions.length)
            ];

        $("#title").text(question.t);

        $("#a").text(question.o1);
        $("#b").text(question.o2);
        $("#c").text(question.o3);
        $("#d").text(question.o4);

        $("#scoreCount").text(current);
        $("#roundCount").text(correct + 1);
    })
})

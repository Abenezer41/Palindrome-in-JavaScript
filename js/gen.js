let button = document.getElementById("gen1");
let display = document.getElementById("d");
let button2 = document.getElementById("btn2")

button.addEventListener("click", () => {
  let palis = [
    "civic","radar","level","rotor","kayak","madam","refer","Abba","Aibohphobia","Bib","Bob",
    "Civic","Deified","Detartrated","Dewed","Eve","Hannah","Kayak","Level","Madam","Malayalam",
    "Minim","Mom","Murdrum","Noon","Nun","Otto","Peep","Pop","Racecar","Radar","Redder","Refer",
    "Repaper","Rotator","Rotavator","Sagas","Sis","Solos","Stats","Tattarrattat","Tenet","Wow",
    "Aha","Ava","Dad","Did","Eke","Ewe","Eye","Gag","Gig","Pip","Pup","Reviver","Sees","Sexes",
    "Succus","Deed","Adda","Ada","Ama","Ana","Lil","Tit","Tot","Tut","Mum","Dud","Tat","Waw",
    "Yay","Pap", "Did",
  ];

  let x = Math.floor(Math.random() * palis.length);

  display.innerText = palis[x];
});

function Clear() {
  display.innerText = "";
}

button2.addEventListener("click", () => {
  Clear();
});

let URL = "https://cat-fact.herokuapp.com/facts";
let P = document.getElementById("p");
let btn = document.getElementById("btn");

function getRandomNumber() {
  return Math.floor(Math.random() * 5);
}

const getFacts = async () => {
  console.log("getting data...");
  let results = await fetch(URL);
  console.log(results.status);
  if (results.status == 200) {
    let fresults = await results.json();
    getRandomNumber();
    let randomNumber = getRandomNumber();
    console.log(fresults);
    console.log(randomNumber);
    P.innerText = fresults[randomNumber].text;
    P.style.backgroundColor = "#7067cf";
  } else {
    P.innerText = "There has been some network problem, please refresh";
  }
};

btn.addEventListener("click", getFacts);

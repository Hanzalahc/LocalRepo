let key = "ema_live_s52ewnq59T77kCtMlwe2EinqF3sjOSCYDxR5wbaP";
let msg = document.querySelector(".box1");
let str = "";

document
  .getElementById("emailForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    let emailValue = document.getElementById("email").value;
    console.log("Email entered:", emailValue);
    let email = emailValue;
    let URL = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(URL);
    let fRes = await res.json();

    for (let key of Object.keys(fRes)) {
      if (fRes[key] !== "" && fRes[key] !== " ") {
        str += `<div>${key}: ${fRes[key]}</div>`;
      }
    }
    msg.innerHTML = str;
    msg.classList.remove("hide");
  });

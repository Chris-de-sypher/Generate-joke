/** @format */

import jokeUrl from "./jokeUrl.js";
import "./style/style.css";

const btn = document.querySelector(".generate");
const copy = document.querySelector("#copy");


window.onload = () => {
    document.querySelector(".punchline").disabled = true;
}


function JokeGenerate() {
    fetch(jokeUrl)
      .then((res) => res.json())
      .then((data) => {
          document.querySelector(".punchline").value = `${data.joke}`;
        console.log(data);
      });

}
btn.addEventListener("click", JokeGenerate);
JokeGenerate()

copy.addEventListener("click", (e)=>{
    e.preventDefault();
    var copyText = document.querySelector(".punchline");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    copy.textContent = 'copied';
    copy.style.background = '#44f';
    copy.style.padding = 5 + 'px';
    setTimeout(() => {
        copy.innerHTML = `<i class="fa-solid fa-copy"></i>`;
    copy.style.background = "transparent";
    }, 1500)
});


let input = document.getElementById('txt-input');
let result = document.getElementById('result');
let btn = document.getElementById('btn');
const url= "https://api.funtranslations.com/translate/morse.json";

function translateURL(inp){
  return url + "?text=" + inp; 
}

function translating(){
  var txtinput = input.value;
  let promise = fetch(translateURL(txtinput));
  promise
  .then((res) => res.json())
  .then((data) => {
    let translatedtxt = data.contents.translated;
    result.innerHTML = translatedtxt;
  })
}

btn.addEventListener('click', translating);
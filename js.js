const fromLang = document.getElementById("from-lang");
const toLang = document.getElementById("to-lang");
const btnTranslate = document.getElementById("translate")
const fromText = document.getElementById("fromtext");
const toText = document.getElementById("totext");


for (let i in languages){
    let option = `<option value=${i}>${languages[i]}</option>`;
    fromLang.insertAdjacentHTML("beforeend", option);
    toLang.insertAdjacentHTML("beforeend", option);

    fromLang.value="en-GB";
    toLang.value="es-ES";
}
    


btnTranslate.addEventListener("click", ()=>{
    const ftext = fromText.value;
    const from = fromLang.value;
    const to = toLang.value;

    const url = `https://api.mymemory.translated.net/get?q=${ftext}&langpair=${from}|${to}`

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
})
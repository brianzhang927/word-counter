const text= document.getElementById("text");
const count = document.getElementById("count");
const countC = document.getElementById("count-c");
const clear = document.getElementById("clear");

function countWords() {
    let wordsC = text.value;
    let words = text.value;
    words = words.trim();
    const wordsArr = words.split(" ");

    if (wordsArr[0] === "") {
        count.innerText = 0;
        countC.innerText = 0;
    } else {
        count.innerText = wordsArr.length;
        countC.innerText = wordsC.length;
    }
}

clear.onclick = ()=>{
    text.value = "";
    countWords();
}
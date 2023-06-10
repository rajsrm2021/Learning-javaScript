const input = document.getElementById("numofwords");
const container = document.querySelector(".container");

const generateWord = (n) => {
  let text = "";
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * (letter.length - 1)).toFixed(0);
    text += letter[random];
  }

  return text;
};

let numofwords;
const generatePara = () => {
  numofwords = Number(input.value);

  const para = document.createElement("p");

  let data = "";

  for (let i = 0; i < numofwords; ++i) {
    randomNumber = (Math.random() * 15).toFixed(0);
    data += generateWord(randomNumber);
    data+=" "
  }

 

  para.innerText = data;

  para.setAttribute("class", "paras");

  container.append(para);
};

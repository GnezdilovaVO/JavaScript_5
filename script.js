"use strict";
// console.log(JSON.parse(dataInfo));
// const divEl = document.querySelector("div.container");

// const parseResult = JSON.parse(dataInfo);
// parseResult.forEach((element) => {
//   const newDiv = document.createElement("div");
//   newDiv.classList.add(element["class"]);
//   const imgEl = document.createElement("img");
//   imgEl.setAttribute("src", element.url);
//   imgEl.setAttribute("width", element.width);
//   imgEl.setAttribute("height", element.height);
//   const pEl = document.createElement("p");
//   pEl.innerHTML = element.text;

//   newDiv.appendChild(imgEl);
//   newDiv.appendChild(pEl);
//   divEl.appendChild(newDiv);
// });
const divEl = document.querySelector("div.container");

fetch("https://api.nbrb.by/exrates/rates?periodicity=0")
  .then((response) => response.json())
  .then((parseResult) => {
    parseResult.forEach((element) => {
      console.log(element);
      const newDiv = document.createElement("div");
      newDiv.classList.add("img_container");
      const textData = document.createElement("p");
      textData.innerHTML = element.Date;
      newDiv.appendChild(textData);

      const textCurAbb = document.createElement("p");
      textCurAbb.innerHTML = element.Cur_Abbreviation;
      newDiv.appendChild(textCurAbb);

      const textCurSc = document.createElement("p");
      textCurSc.innerHTML = element.Cur_Scale;
      newDiv.appendChild(textCurSc);

      const textCerName = document.createElement("p");
      textCerName.innerHTML = element.Cur_Name;
      newDiv.appendChild(textCerName);

      const textCurOff = document.createElement("p");
      textCurOff.innerHTML = element.Cur_OfficialRate;
      newDiv.appendChild(textCurOff);

      divEl.appendChild(newDiv);
    });
  });

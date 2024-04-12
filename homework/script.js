"use strict";
const parseRes = JSON.parse(data);
console.log(parseRes);
const divEl = document.querySelector("div.content");

parseRes.forEach((element) => {
  const newDivEl = document.createElement("div");

  const aEl = document.createElement("a");
  aEl.setAttribute("href", element.url);
  aEl.innerHTML = "Link";

  const h1El = document.createElement("h1");
  h1El.innerHTML = element.name;

  const h3El = document.createElement("h3");
  h3El.innerHTML = element.gender;

  const h3El2 = document.createElement("h3");
  h3El2.innerHTML = element.culture;

  const h3El3 = document.createElement("h3");
  h3El3.innerHTML = element.born;

  const h3El4 = document.createElement("h3");
  h3El4.innerHTML = element.died;

  const pEl = document.createElement("p");
  pEl.innerHTML = element.aliases;

  const h3El5 = document.createElement("h3");
  h3El5.innerHTML = element.father;

  const h3El6 = document.createElement("h3");
  h3El6.innerHTML = element.mother;

  const h3El7 = document.createElement("h3");
  h3El7.innerHTML = element.spouse;

  const h3El8 = document.createElement("h3");
  h3El8.innerHTML = element.allegiances;

  const aEl1 = document.createElement("a");
  aEl1.setAttribute("href", element.books);
  aEl1.innerHTML = "Book";

  const h3El9 = document.createElement("h3");
  h3El9.innerHTML = element.povBooks;

  const h3El10 = document.createElement("h3");
  h3El10.innerHTML = element.tvSeries;

  const h3El11 = document.createElement("h3");
  h3El11.innerHTML = element.playedBy;

  newDivEl.appendChild(aEl);
  newDivEl.appendChild(h1El);
  newDivEl.appendChild(h3El);
  newDivEl.appendChild(h3El2);
  newDivEl.appendChild(h3El3);
  newDivEl.appendChild(h3El4);
  newDivEl.appendChild(pEl);
  newDivEl.appendChild(h3El5);
  newDivEl.appendChild(h3El6);
  newDivEl.appendChild(h3El7);
  newDivEl.appendChild(h3El8);
  newDivEl.appendChild(aEl1);
  newDivEl.appendChild(h3El9);
  newDivEl.appendChild(h3El10);
  newDivEl.appendChild(h3El11);
  divEl.appendChild(newDivEl);
});

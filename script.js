//how do we get elements in WEB DOM?

//total balance
let balanceElement = document.querySelector("#balance");
//value input
let numberEntry = document.querySelector("input");
//income/expense
const selectElement = document.querySelector("select");
//addition button
const addButton = document.querySelector("button");
// Entry list
const entryElements = document.querySelector("section ul");

// console.log(balanceElement);
// console.log(numberEntry);
// console.log(selectElement);
// console.log(addButton);
// console.log(entryElements);

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount + "$";

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");
  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryElements.appendChild(listEntry);
}

function updateBalance() {
  //console.log(entryElements.children);
  let total = 0;

  for (let item of entryElements.children) {
    // console.log(item);
    const valueElement = item.querySelector("strong");
    const operatorElement = item.querySelector("span");

    const value = parseInt(valueElement.innerText);
    const operation = operatorElement.innerHTML;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }

  balanceElement.innerText = total + "$";
}

addButton.onclick = function () {
  const amount = numberEntry.value;
  const operation = selectElement.value;

  addEntry(amount, operation);

  numberEntry.value = "";

  updateBalance();
};

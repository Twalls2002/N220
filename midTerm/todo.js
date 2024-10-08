//Array to track todo items
let todoItems = [];

//Function to add an item
function addItem() {
  const itemInput = document.getElementById("item");
  const item = itemInput.value.trim();

  if (item) {
    todoItems.push(item);
    itemInput.value = "";
    updateList();
  } else {
    alert("Please enter an item.");
  }
}

//Function to update the displayed list
function updateList() {
  const list = document.getElementById("list");
  list.innerHTML = ""; // Clear the existing list

  todoItems.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    list.appendChild(listItem);
  });
}

//Function to summarize the list
function summarizeList() {
  const summary = document.getElementById("summary");
  const totalItems = todoItems.length;
  const firstItem = totalItems > 0 ? todoItems[0] : "No items";
  const lastItem = totalItems > 0 ? todoItems[totalItems - 1] : "No items";

  summary.innerHTML = `
        Total Items: ${totalItems} <br />
        First Item: ${firstItem} <br />
        Last Item: ${lastItem}
    `;
}

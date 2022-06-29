const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const user = document.getElementById("user");
const myul = document.getElementById("myul");
const count = document.getElementById("items_left");
const checkbox = document.getElementById("checkbox");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";
  }
});

const items = [];

user.addEventListener("submit", function (event) {
  event.preventDefault();
  const { plans } = user.elements;
  console.log(plans.value);

  items.push({
    plans: plans.value,
  });

  displayList(items);
  uptadeUserCount(items);
});

myul.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const i = Number(event.target.parentElement.id);
    items.splice(i, 1);
    displayList(items);
    uptadeUserCount(items);
  }

  if (event.target.tagName === "INPUT") {
    const checkbox = event.target;
    const text = checkbox.nextElementSibling.firstElementChild;
    if (checkbox.checked) {
      text.style.textDecoration = "Line-through";
    } else {
      text.style.textDecoration = "None";
    }
    console.log(text);
  }
});

function displayList(items) {
  let itemsHTML = "";
  let i = 0;
  for (let item of items) {
    itemsHTML += `
    <ul class="list-group">
      <li id="${i}" class="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" id="checkbox" name"checkboxItems"/>
      <div class="ms-2 me-auto">
     
      <div class="fw-bold">${item.plans}</div>
      </div>
      <button type="button" class="btn btn-sm"> X </button>
        </li>
        </ul>
      `;
    i++;
    // console.log(li);
    // myul.insertAdjacentHTML("beforeend", li);
  }
  myul.innerHTML = itemsHTML;
}

function uptadeUserCount(items) {
  count.textContent = items.length;
}

var body = document.getElementsByTagName("body")[0];
var maindiv = document.createElement("div");
maindiv.setAttribute("class", "_main_div");
var inputvalue = document.getElementById("_input");
var btn = document.getElementById("button");
var removebtn = document.getElementById("remove_button");
var getlocalstorage = localStorage.getItem("todo");
body.appendChild(maindiv);
maindiv.appendChild(inputvalue);
maindiv.appendChild(btn);

var Data = [];
if (getlocalstorage !== null) {
  getlocalstorage = localStorage.getItem("todo");
  Data = JSON.parse(getlocalstorage);
}

function add() {
  if (inputvalue.value === "") {
    alert("Enter your Task");
  } else {
    Data.unshift(inputvalue.value);
    Data.innerHTML = "";
    localStorage.setItem("todo", JSON.stringify(Data));
    window.location.reload();
  }
  li.appendChild(err);
}
var list = document.getElementById("_list");
for (var i = 0; i < Data.length; i++) {
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.setAttribute("class", "list_value");
  span.innerHTML = Data[i];
  li.appendChild(span);

  var editbtn = document.createElement("button");
  editbtn.innerHTML = "Edit";
  editbtn.setAttribute("onclick", `EditFunc(${i})`);
  editbtn.setAttribute("class", "edtbtn");
  var deletebtn = document.createElement("button");
  deletebtn.innerHTML = "Delete";
  deletebtn.setAttribute("onclick", `DeleteFunc(${i})`);
  deletebtn.setAttribute("class", "delbtn");

  li.appendChild(deletebtn);
  li.appendChild(editbtn);
  list.appendChild(li);
  maindiv.appendChild(list);
}

function EditFunc(index) {
  console.log(">>>>>>>>>>", index);
  var update = prompt("Enter update value");
  Data.splice(index, 1, update);
  localStorage.setItem("todo", JSON.stringify(Data));
  window.location.reload();
}

function DeleteFunc(index) {
  console.log(">>>>>>>>>>", index);
  Data.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(Data));
  window.location.reload();
}

function removeAll() {
  localStorage.removeItem("todo");
  window.location.reload();
}
maindiv.appendChild(removebtn);

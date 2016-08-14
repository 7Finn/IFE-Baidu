var numbers, leftInBtn, leftOutBtn, rightInBtn, rightOutBtn, textInput;


window.onload = function() {
  numbers = document.getElementById('numbers');
  leftInBtn = document.getElementById('left-in');
  leftOutBtn = document.getElementById('left-out');
  rightInBtn = document.getElementById('right-in');
  rightOutBtn = document.getElementById('right-out');
  textInput = document.getElementById('text-input');
  

  leftInBtn.onclick = function() {
    if (!check()) return;
    var newDiv = createDiv();
    var divs = document.getElementsByClassName('number-div');
    if (divs.length == 0) numbers.appendChild(newDiv);
    else numbers.insertBefore(newDiv, divs[0]);
  }

  rightInBtn.onclick = function() {
    if (!check()) return;
    var newDiv = createDiv();
    numbers.appendChild(newDiv);
  }

  leftOutBtn.onclick = function() {
    var divs = document.getElementsByClassName('number-div');
    if (divs.length == 0) return;
    alert(divs[0].innerHTML);
    numbers.removeChild(divs[0]);
  }

  rightOutBtn.onclick = function() {
    var divs = document.getElementsByClassName('number-div');
    if (divs.length == 0) return;
    alert(divs[divs.length - 1].innerHTML);
    numbers.removeChild(divs[divs.length - 1]);
  }
}

function createDiv() {
  var newDiv = document.createElement("div");
  newDiv.className="number-div";
  newDiv.innerHTML=textInput.value;
  newDiv.onclick=function() {
    deleteClick(this);
  }
  return newDiv;
}

function check() {
  if (textInput.value == "") return false;
  return true;
}

function deleteClick(node) {
  numbers.removeChild(node);
}
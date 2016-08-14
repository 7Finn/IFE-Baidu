var numbers, rightInBtn, textInput, sortBtn;


window.onload = function() {
  numbers = document.getElementById('numbers');
  rightInBtn = document.getElementById('right-in');
  textInput = document.getElementById('text-input');
  sortBtn = document.getElementById('sort-btn');

  rightInBtn.onclick = function() {
    if (!check()) return;
    if (textInput.value < 10 | textInput.value >= 100) {
      alert("Please input 10 ~ 100");
      return;
    }
    var newContainer = createDiv(textInput.value);
    numbers.appendChild(newContainer);
  }

  sortBtn.onclick = function() {
    sort();
  }
}

function createDiv(value) {
  var newContainer = document.createElement('div');
  newContainer.className = "container";
  var newDiv = document.createElement("div");
  newDiv.className="number-div";
  newDiv.style.height = 30 + value*2 + "px";
  newDiv.innerHTML=value;
  newContainer.appendChild(newDiv);
  return newContainer;
}

function check() {
  if (textInput.value == "") return false;
  return true;
}

function sort() {
  var numberDivs = document.getElementsByClassName('number-div');
  for (var i = 0; i < numberDivs.length; ++i) {
    for (var j = i + 1; j < numberDivs.length; ++j) {
      if (numberDivs[i].innerHTML > numberDivs[j].innerHTML) {
        var temp = numberDivs[i].innerHTML;
        numberDivs[i].innerHTML = numberDivs[j].innerHTML;
        numberDivs[i].style.height = 30 + numberDivs[j].innerHTML*2 + 'px';
        numberDivs[j].innerHTML = temp;
        numberDivs[j].style.height = 30 + temp*2 + 'px';
        
      }
    }
  }
}
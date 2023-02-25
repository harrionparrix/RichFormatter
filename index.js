function BoldText() {
  //function to make the text bold
  //   var txtarea = document.getElementById("text");
  //   var start = txtarea.selectionStart;
  //   // Obtain the index of the last selected character
  //   var finish = txtarea.selectionEnd;

  //   // Obtain the selected text
  //   var sel = txtarea.value.substring(start, finish);
  //   console.log(sel);
  document.getElementById("text").style.fontWeight = "bold";
}

function ItalicText() {
  //function to make the text italic
  document.getElementById("text").style.fontStyle = "italic";
}

function UnderlineText() {
  //function to make the text underlined
  document.getElementById("text").style.textDecoration = "underline";
}
function HeadingText() {
  //function to make the text as heading
  var elem = document.getElementById("text");
  var x = document.createElement("H1");
  var t = document.getElementById("text").value;
  x.innerHTML = t;
  elem.parentNode.replaceChildren(x, elem);
}

function LinkText() {
  //function to make the text as links
  var elem = document.getElementById("text");
  var x = document.createElement("H1");
  var t = document.getElementById("text").innerHTML;
  x.href = t;
  elem.parentNode.replaceChild(x, elem);
}

function ListText() {
  //function to make the text as listts
  var elem = document.getElementById("text");
  var x = document.createElement("ul");
  var x1 = document.createElement("li");
  x1.innerHTML = document.getElementById("text").innerText;
  x.appendChild(x1);
  elem.parentNode.replaceChild(x, elem);
}

function greet() {
    window.alert("Hello everyone! ");
}

function init() {
  // Task5 //
    let spans = document.getElementsByClassName("flo");
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for (var i = spans.length - 1; i >= 0; i--) {
  spans[i].style.color = colors[i];
}

var changeSrc = function(image){
  let filename = event.target.src.replace(/^.*[\\\/]/, '');
  if(filename=="flower1.png"){
    image.target.src="flower2.png";
  }
  else{
    image.target.src="flower1.png";
  }
};
document.getElementById("event").addEventListener("mouseover", changeSrc);

}

  let img=document.createElement("img");
  img.src="flower1.png";
  var src=document.getElementById("new_element");
  src.appendChild(img);

function addItem(){
  var check = document.getElementById("important");
  var check2 = document.getElementById("groceries");

  var item = document.createElement("item");
  var li = document.createElement("li");
  item.innerText = document.getElementById("sho").value;


  if(check.checked){
    item.style.color = 'red';
  }

  if(check2.checked){
    item.style["text-decoration"]= 'underline';
  }

  li.appendChild(item);
  document.getElementById("emp").appendChild(li);
  document.getElementById("sho").value = '';
}

function removeItem(){
  var list = document.getElementById("emp");
  var number = document.getElementById("remove").value;
  list.removeChild(list.childNodes[number]);
}
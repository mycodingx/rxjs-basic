import { Observable } from "rxjs";

var observable = new Observable((observer: any) => {
  observer.next("Hey guys!");
});

observable.subscribe((x: any) => addItem(x));

// Function create HTML elements

function addItem(val: any) {
  var node = document.createElement("li");
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}

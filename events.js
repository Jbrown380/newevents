const buttons = document.querySelectorAll("buttons")
const tbody = document.querySelector("body")
var fooEl = document.getElementById("#Red")
var barEl = document.getElementById("#Blue")
var fooBarEl = document.getElementById("#Green")

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        console.log(event.target.id);
        
        var mainEl = document.querySelector("main");
        mainEl = document.createElement("h2" + "h3");
   fooEl.innerHTML = "foo";
   barEl.innerHTML = "bar";
   fooBarEl.innerHTML = "fooBar";
 })
}

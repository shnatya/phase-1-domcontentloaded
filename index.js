// Your code goes here
/*document.addEventListener("DOMContetLoaded", function(){
    let p = document.querySelector("p")
    p.textContent = "This is really cool!"
    console.log(p.value)
})*/
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let p = document.querySelector("p")
    p.textContent = "This is really cool!"
    console.log("Yeeeee!")
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
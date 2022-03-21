document.addEventListener("DOMContentLoaded", function(){
    console.log("The DOM has loaded");
    const textRef = document.querySelector("#text");
    textRef.textContent = 'This is really cool!';
})
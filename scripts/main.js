const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
    const mySrc= myImage.getAttribute("src");
    if(mySrc==="images/firefox1.png") {
        myImage.setAttribute("src","images/firefox2.png");
    }
    else{
        myImage.setAttribute("src","images/firefox1.png");
    }
};

function setUserName() {
    const myName = prompt("Please Enter your name: ");
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hi ${myName}, Welcome to Mozilla`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome Back ${storedName}`;
}

myButton.onclick = () => {setUserName();};
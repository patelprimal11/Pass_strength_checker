// const pass=document.getElementById("pass")
// const in1=document.getElementById("in").value

// const background= document.getElementById("main")
const passw=document.getElementById("pass")

// background.style.filter='blur(0px)'
passw.addEventListener("input",()=>{
    
   
    input=passw.value;
    blura=19-input.length;
    let a =ndocument.getElementById("main")
    a.style.filter='blur(${blura}px)'

});
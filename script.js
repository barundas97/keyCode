window.addEventListener("keydown",(e)=>{
    document.querySelector("#result").innerHTML = `The key Pressed is <span>${e.key}</span><span>key Code: ${e.keyCode}</span>`;
    
})
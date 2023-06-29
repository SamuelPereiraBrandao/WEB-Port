
function testando (mensagem){
    alert(mensagem);   
}


setTimeout(function(){
    document.getElementById("weather").innerHTML = "passou 2 segundos";
    document.querySelector("#greeting").classList.add("redbg");
},2000);

setTimeout(function(){
    document.getElementById("weather").innerHTML = "passou 4 segundos";
    document.querySelector("#greeting").classList.remove("redbg");
},4000);
window.onload = function(){

let cont = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    proxima();
    
}, 3000)

function proxima(){
    cont++;
    if (cont>3){
        cont = 1;
    }
    document.getElementById("radio"+cont).checked = true;
    console.log(cont)

}




let cont1 = 4;
document.getElementById("radiodois4").checked = true;

setInterval( function() {
    proxima2();
    
}, 3000)

function proxima2(){
    cont1++;
    if (cont1>6){
        cont1 = 4;
    }
    document.getElementById("radiodois"+cont1).checked = true;
    console.log(cont1)
}




}  


const cel = document.querySelector('.celular')

function mostrar(){

    cel.classList.toggle('show');
    

}


     





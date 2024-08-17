const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
var textToCopy = document.querySelector("text-to-copy");


function btnEncriptar(){
    const textoEncriptado = Encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
   
}



function Encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["0","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()


    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }

    }return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value =  textoEncriptado;
    textArea.value = "";
   
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["0","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }return stringDesencriptada
} 

function btncopiar(){
    const stringDesencriptada = copiarTexto(textArea.value)
    mensaje.value = stringDesencriptada;
}


function copiarTexto() {
    
    textToCopy.select();
    textToCopy.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.querySelector("copy");

    var message = document.getElementById("copy-message");
    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 2000);
}

document.getElementById("copy-button").addEventListener("click", copiarTexto);



    




const textarea = document.querySelector(".entrada_texto");
const mensagem = document.querySelector(".saida_Texto");


// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = "";
    mensagem.style.backgroundImage = "url(/imagens/bau_fechado.png)";
}

function encriptar(stringEncriptada){
    let chaves = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    // Verifica se a string contém caracteres acentuados
    if (/[\u00C0-\u00FF]/.test(stringEncriptada)) {
        alert("O texto contém acentos. Por favor, remova-os.");
        return;
    }

    // Verifica se a string contém símbolos
    if (/[^a-zA-Z0-9 ]/.test(stringEncriptada)) {
        alert("O texto contém símbolos. Por favor, remova-os.");
        return;
    }

    for(let i = 0; i< chaves.length; i++){
        if(stringEncriptada.includes(chaves[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(chaves[i][0],chaves[i][1]);
        }
    }
    stringEncriptada = stringEncriptada.replace(/[!@#$%¨&*()]/g, '');

    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value = "";
    mensagem.style.backgroundImage = "url(/imagens/bau_aberto.png)";
}

function desencriptar(stringDesencriptada){

    let chaves = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i< chaves.length; i++){
        if(stringDesencriptada.includes(chaves[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(chaves[i][1],chaves[i][0]);
        }
    }

    return stringDesencriptada;
}

function btnCopiar() {
    textarea.value = mensagem.value;
}

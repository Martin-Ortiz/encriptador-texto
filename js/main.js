var entradaTexto = document.getElementById("entradaTexto");

var btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.addEventListener("click", encriptarTexto);

var btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener("click", desencriptarTexto);

var salidaTexto = document.getElementById("salidaTexto");
var btnCopiar = document.getElementById("btnCopiar");
btnCopiar.style.visibility="hidden";
btnCopiar.addEventListener("click", copiarTexto);

function encriptarTexto() {
  texto = entradaTexto.value;

  // Convirtiendo mensaje a un array para cifrar el String
  var letras = Array.from(texto);

  // Validar cadena
    cadenaFinal = "";

    // Remplazando letras por codigo Top Secret
    for (i = 0; i < letras.length; i++) {
      switch (letras[i]) {
        case "a":
          cadenaFinal = cadenaFinal + "ai";
          break;
        case "e":
          cadenaFinal = cadenaFinal + "enter";
          break;
        case "i":
          cadenaFinal = cadenaFinal + "imes";
          break;
        case "o":
          cadenaFinal = cadenaFinal + "ober";
          break;
        case "u":
          cadenaFinal = cadenaFinal + "ufat";
          break;
        default:
          var minusculas = ((letras[i] >96 && letras[i]<123) || letras[i] ==164) 

          if((letras[i].charCodeAt(0)>96 && letras[i].charCodeAt(0)<123) || letras[i]=="ñ" || letras[i]==" "){
            cadenaFinal = cadenaFinal + letras[i];
          }else {
            alert("Lo sentimos, el texto no es valido, solo se permiten minusculas y sin acentos");
            cadenaFinal="";
            i=letras.length;
          }
      }
    }
  
  // Colocando mensaje deencriptado en pantalla
  ocultarElementos(texto);
  salidaTexto.textContent = cadenaFinal;
}

function desencriptarTexto() {
  // Creacion de banderas para el remplazo
  var re1 = /ai/gi;
  var re2 = /enter/gi;
  var re3 = /imes/gi;
  var re4 = /ober/gi;
  var re5 = /ufat/gi;

  // Desencriptando mensaje
  textoDesencriptado = entradaTexto.value
    .replace(re1, "a")
    .replace(re2, "e")
    .replace(re3, "i")
    .replace(re4, "o")
    .replace(re5, "u");

  // Colocando mensaje deencriptado en pantalla
  salidaTexto.textContent = textoDesencriptado;
}

function copiarTexto() {
  navigator.clipboard.writeText(salidaTexto.value);
  alert("Texto copiado con exito baby");
}

function ocultarElementos(texto){
  if(texto.value!=""){
    var imgBusqueda = document.getElementById("imgInicial").style.visibility="hidden";
    var pTMensaje = document.getElementById("tituloMensaje").style.visibility="hidden";
    var pSMensaje = document.getElementById("subtituloMensaje").style.visibility="hidden";
    btnCopiar.style.visibility="visible";
  }

}

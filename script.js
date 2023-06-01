let encryptButton = document.getElementById("button-para-criptografa");
let decryptButton = document.getElementById("button-para-descriptografar")
let inputText = document.getElementById("input-text");
let outputText = document.getElementById("output-text");
let botaoCopia = document.getElementById("botaoCopia");
let aparecer = document.getElementById("coopia");
let sumir = document.getElementById("sumir");



encryptButton.addEventListener("click", function() {
  let texto = inputText.value;
  let textoCriptografado = criptografar(texto); // supondo que existe uma função chamada 'criptografar'
  outputText.value = textoCriptografado;
  verificaOutputText();
});


decryptButton.addEventListener("click", function() {
  let texto = inputText.value;
  let textoDescriptografado = descriptografar(texto); // supondo que existe uma função chamada 'criptografar'
  outputText.value = textoDescriptografado;
  verificaOutputText();
});
const mapeamento = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat' 
}
const mape = {
  'enter':'e',
  'imes':'i',
  'ai':'a',
  'ober':'o',
  'ufat':'u' 
}
function criptografar(texto) {
   
  // Aqui você pode colocar sua lógica de criptografia
  return texto.replace(/[aeiou]/ig, function(letra) {
    return mapeamento[letra.toLowerCase()] || letra;
  })
 
}

function descriptografar(texto) {
   
    // Aqui você pode colocar sua lógica de descriptografar
    return texto.replace(/(enter|imes|ai|ober|ufat)/g, function(str) {
      return mape[str.toLowerCase()] || str;
    })


}

function verificaOutputText() {
  if (outputText.value.trim() !== "") {
    aparecer.style.display = "flex";
    sumir.style.display = "none";
  } else {
    aparecer.style.display = "none";
    sumir.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (outputText.value.trim() !== "") {
    aparecer.style.display = "flex";
  } else {
    aparecer.style.display = "none";
  }
});

outputText.addEventListener("input", function() {
  verificaOutputText();
});

botaoCopia.addEventListener("click", function() {
  outputText.select();
  document.execCommand("copy");
});

function addEvent(type, el, callback)
{
 if (window.addEventListener) {
     el.addEventListener(type, callback, false);
 } else if (window.attachEvent) {
     el.attachEvent("on" + type, callback);
 } else {
     el["on" + type] = callback;
 }
}

function resizeTextfield(el)
{
 var timer;

 function trigger() {
     if (!el) { return; }

     el.style.height = "auto";

     var height = el.scrollHeight;

     el.style.height = height + "px";
 }

 function exec() {
     if (timer) {
         clearTimeout(timer);
     }

     timer = setTimeout(trigger, 10);
 }

 addEvent("keyup", el, exec);
 addEvent("input", el, exec);
}

window.onload = function () {
 var els = document.getElementsByClassName("increase");

 for (var i = els.length - 1; i >= 0; i--) {
     resizeTextfield(els[i]);
 }
};
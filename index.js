function encrypter() {
  let input = document.getElementById("encrypt").value.toLowerCase();
  var encrypt = input.replace(/e/gim, "enter");
  var encrypt = encrypt.replace(/o/gim, "ober");
  var encrypt = encrypt.replace(/i/gim, "imes");
  var encrypt = encrypt.replace(/a/gim, "ai");
  var encrypt = encrypt.replace(/u/gim, "ufat");
  document.getElementById("espera").style.display = "none";
  document.getElementById("txt").style.display = "none";
  document.getElementById("msg").style.display = "none";
  document.getElementById("result").innerHTML = encrypt;
  document.getElementById("result").style.display = "show";
  document.getElementById("result").style.display = "inherit";
  document.getElementById("copyButton").style.display = "show";
  document.getElementById("copyButton").style.display = "inherit";
}

function decrypter() {
  let input = document.getElementById("encrypt").value.toLowerCase();
  var encrypt = input.replace(/enter/gim, "e");
  var encrypt = encrypt.replace(/ober/gim, "o");
  var encrypt = encrypt.replace(/imes/gim, "i");
  var encrypt = encrypt.replace(/ai/gim, "a");
  var encrypt = encrypt.replace(/ufat/gim, "u");
  document.getElementById("espera").style.display = "none";
  document.getElementById("txt").style.display = "none";
  document.getElementById("msg").style.display = "none";
  document.getElementById("result").innerHTML = encrypt;
  document.getElementById("result").style.display = "show";
  document.getElementById("result").style.display = "inherit";
  document.getElementById("copyButton").style.display = "show";
  document.getElementById("copyButton").style.display = "inherit";
}

function copier() {
  var textCopy = document.querySelector("#result");
  textCopy.select();
  document.execCommand("copy");
}
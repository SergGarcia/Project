function saveTextAsFile() {

  var nome = "Nome: " + document.getElementById("nome").value + "\r";
  var sobrenome = "Sobrenome: " + document.getElementById("sobrenome").value + "\r";
  var cpf = "CPF: " + 
		document.getElementById("cpf").value + "\r";
  var email = "E-mail: " + document.getElementById("email").value + "\r";

  var salva =  "\r" + nome + sobrenome + cpf + email + "\r"

  var textFileAsBlob = new Blob([salva], {
    type: 'text/plain'
  });

  var downloadLink = document.createElement("a");
  downloadLink.download = 'formData.txt';
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

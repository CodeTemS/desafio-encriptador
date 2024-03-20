function encriptar() {
    let texto = document.getElementById("texto").value;
    let text_desc = document.querySelector('#text_desc');
  
    let txtCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      text_desc.value = txtCifrado;
      text_desc.classList.add('active');
    }
    
  }
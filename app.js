

function encriptar() {
    let texto = document.getElementById("texto").value;
    let text_desc = document.querySelector('#text_desc');
    let imagen = document.querySelector('#monito');

 
    let txtCifrado = texto
      .replace(/e/, "enter")
      .replace(/i/, "imes")
      .replace(/a/, "ai")
      .replace(/o/, "ober")
      .replace(/u/, "ufat");
  
    if (texto.length != 0) {
      text_desc.value = txtCifrado;
      imagen.classList.add('inactive');
      text_desc.classList.remove('inactive');
      text_desc.classList.add('active');
      
    }else{
        alert('Por favor escriba un mensaje');
    }
    
  }
  const desencriptar = () =>{
    let texto = document.getElementById("texto").value;
    let text_desc = document.querySelector('#text_desc');

    let txtDes = texto
    .replace(/enter/, "e")
    .replace(/imes/, "i")
    .replace(/ai/, "a")
    .replace(/ober/, "o")
    .replace(/ufat/, "u");

    if (texto.length != 0) {
        text_desc.value = txtDes
    }else{
        alert('Por favor escriba un mensaje');
    }

  }

  const copiar = ()=>{
    let text_desc = document.querySelector('#text_desc');
    text_desc.select();
    document.execCommand("copy")
    alert('texto copiado en portapapeles');
  }
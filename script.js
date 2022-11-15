const formulario = document.getElementById('formulario');
const csvFile = document.getElementById('csvFile');
const resultado = document.getElementById('resultado');
let obj;
let html = '';

function card(obj) {
  return `   

        <div class="card">
            <div class="imagem">
                <img src="${obj.imagem}" alt="" srcset="">
            </div>
            <div class="descricao">
                <h2>${obj.descricao}</h2>
                <h4>Código:${obj.codigo}</h4>
            </div>
            <div class="precos">
                <div class="preco-de">De: R$ ${obj.preco_de}</div>
                <div class="preco-por">Por: R$ ${obj.preco_de}</div>
            </div>
        </div>

        `;
}

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  const input = csvFile.files[0];
  const reader = new FileReader();

  //executed when a file is loaded
  reader.onload = function (e) {
    //get the text from CSV file
    const text = e.target.result;

    //parse it using D3.js
    const data = d3.csvParse(text);

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
      html += card(data[i]);
    }

    resultado.innerHTML = html;
    console.log('script finalizado - habilitar o botão do resultado');
  };

  //load the input file to the reader
  reader.readAsText(input);
});

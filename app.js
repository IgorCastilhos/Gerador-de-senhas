const passInput = document.querySelector("#inputPasswordId"); // Referencia o inputPasswordId
const lenInput = document.querySelector("#inputLengthId"); // Referencia o inputLengthId, que é o range
const infoLength = document.querySelector('label[for="inputLengthId"]'); // Referencia a label que têm um for
const btnGerar = document.querySelector("#btnGerar"); // Referencia o btnGerar

// Referenciando as checkbox
const chkLower = document.querySelector("#chkLowerId");
const chkUpper = document.querySelector("#chkUpperId");
const chkNumber = document.querySelector("#chkNumberId");
const chkSymbols = document.querySelector("#chkSymbolsId");

// Const numbers e symbols serão utilizadas para gerar a senha
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "$", "%"];

// 26 é o tamanho do array. Map pegando index + 97, vai dar através da tabela access nosso alfabeto, que vai do A-Z, percorrendo as 26 posições
const caracters = Array.from(Array(26)).map((_, i) => i + 97);

// map dos caracters pegando a string através do CharCode criado no Array de cima
const LowercaseCaracters = caracters.map((item) => String.fromCharCode(item));

// Para as letra maiúsculas = as letras minúsculas, passando um toUpperCase, retornando um Array apenas com letras maiúsculas
const UppercaseCaracters = LowercaseCaracters.map((item) => item.toUpperCase());

// Para gerar a informação do número de caracteres no lado direito quando carregar o componente
infoLength.innerHTML = lenInput.value;

// Quando eu mudar o lenInput, no evento change, vou mudar a informação do infoLength
lenInput.addEventListener("change", () => {
  infoLength.innerHTML = lenInput.value;
});

// Declaração um evento de click para o botão gerar e criação de uma função com 5 parâmetros
btnGerar.addEventListener("click", () => {
  generatePassword(
    chkNumber.checked,
    chkSymbols.checked,
    chkLower.checked,
    chkUpper.checked,
    lenInput.value
  );
});

// Criamos aqui essa função
const generatePassword = (
  hasNumbers,
  hasSymbols,
  hasLowercase,
  hasUppercase,
  lenght
) => {
  const newArray = [ // Verifica se têm, por exemplo, números. Se tiver, vou pegar todas as informações do Array de Numbers. Caso for falso, irá retornar um Array vazio.
    ...(hasNumbers ? numbers : []),
    ...(hasSymbols ? symbols : []),
    ...(hasLowercase ? LowercaseCaracters : []),
    ...(hasUppercase ? UppercaseCaracters : []),
  ];

  if(newArray.length === 0) return;

  let password = ""
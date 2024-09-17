const frm = document.querySelector("form"); //cria uma referencia com o documento HTML "form"
const resp = document.querySelector("h3"); //cria uma referencia com o documento HTML "h3"

// cria um 'ouvinte' de evento, adicionado quando o botão submit for clicado
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value // recebe a informacao de 'nome'
    resp.innerText = `Olá ${nome}` // exibe a resposta do programa
    e.preventDefault() //evita envio do form
})


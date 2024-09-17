//Criando uma referencia para o documento html
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{

    const titulo = frm.inTitulo.value //obtém conteúdo dos campos
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao/60) // arredonda para baixo o resultado
    const minutos = duracao%60 // obtém o resto da divisão

    resp1.innerText = titulo  // exibe as resposta
    resp2.innerText = `${horas} hora(s) e ${minutos} minutos(s)`

    e.preventDefault()
})
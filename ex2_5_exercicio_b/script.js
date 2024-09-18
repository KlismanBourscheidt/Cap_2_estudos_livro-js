// criando a referencia
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// criando evento "ouvinte"
frm.addEventListener("submit", e =>{
    const preco = Number(frm.inPreco.value) // Recebe o preco dos 15 minutos
    const minutos = Number(frm.inTempo.value) // recebe o tempo de uso do cliente

    const total = Math.ceil((minutos/15))*preco //faz o calculo de quanto o cliente gastou 
    resp.innerText = `Valor a pagar R$${total.toFixed(2)}` //apresenta a mensagem

    e.preventDefault() // Evita o envio do Submit
})
//criando uma referencia para o documento em javascript
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

//criando um ouvinte para o evento "submit"
frm.addEventListener("submit", (e) =>{
    const quilo = frm.inQuilo.value //recebe os dados colocados nos inputs
    const consumo = frm.inConsumo.value

    const valor = (quilo/1000)*consumo // calcula valor a ser pago
    resp1.innerText = `Valor a pagar R$${valor.toFixed(2)}`//exibe resposta

    e.preventDefault()
})
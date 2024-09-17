//criar uma referencia para o documento html
const frm = document.querySelector("form")
const resp1 = document.querySelector("outResp1")
const resp2 = document.querySelector("outResp2")

//criar um ouvinte para o evento submit
frm.addEventListener("submit", (e)=>{
    const remedio = frm.inMedicamento.value //recebe o nome do medicamento
    const preco = Number(frm.inPreco.value) // recebe o valor do remedio
    const total = Math.floor(preco*2) // desconto

    outResp1.innerText = `Promocäo de ${remedio}`  
    outResp2.innerText = `Leve 2 por apenas R$${total.toFixed(2)}`
    
    e.preventDefault()
})

//objetivo deste exercicio é ter uma pequena promocao de centavos
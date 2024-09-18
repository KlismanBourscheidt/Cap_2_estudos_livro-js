//Criando uma referencia para o documento html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//Criando um ouvinte para o evento submit
frm.addEventListener("submit", (e)=>{
    const produto = frm.inProduto.value // recebe o nome do produto
    const preco = Number(frm.inPreco.value) // recebe o valor do produto

    const desconto = preco*0.50
    const total = preco*2+desconto

    resp1.innerText = `${produto} - Promocäo : Leve 3 por R$${total.toFixed(2)}`
    resp2.innerText = `O terceiro produto custa apenas R$${desconto.toFixed(2)}`

    e.preventDefault()
})
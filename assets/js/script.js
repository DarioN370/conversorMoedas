// Criar a requisição para pegar o valor do dolar atualizado e automaticamente com a requisição nesse site da uol https://economia.uol.com.br/cotacoes/cambio/

let dolar = 6.05

let usdInput = document.querySelector("#usd")
let brlInput = document.querySelector("#brl")

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
})

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
})

usdInput.value = "1" // value defined to test
convert("usd-to-brl")

usdInput.addEventListener("blur", () => {
    usdInput.value = formatCurrency(usdInput.value)
})

brlInput.addEventListener("blur", () => {
    brlInput.value = formatCurrency(brlInput.value)
})



// SPACE TO create functions -----------------------------------------------------

function formatCurrency(value) {
    let fixedValue = fixValue(value) //ajusta o valor

    let options = {
        useGrouping: false, // nao poe pontos nas milhares, centenas etc...
        minimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-br", options) //criei o formatador puxando a bibilioteca interna 

    return formatter.format(fixedValue) //retornar o valor formatado
}



function fixValue(value){
    let fixedValue = value.replace(",", ".") // aqui eu to trocando a virgula pelo ponto
    let floatValue = parseFloat(fixedValue)
    if(floatValue == NaN){
        floatValue = 0 
    } //esse if serve pra assegurar que se o user nao colocar um numero o codigo nao vai quebrar, ele só vai dar o valor 0 e vai ajustar o valor
    return floatValue
}


function convert(type) {
    if(type == "usd-to-brl"){
        let fixedValue = fixValue(usdInput.value)

        let result = fixedValue * dolar
        result = result.toFixed(2)

        brlInput.value = formatCurrency(result)
    }

    if(type == "brl-to-usd"){
        let fixedValue = fixValue(brlInput.value)

        let result = fixedValue / dolar
        result = result.toFixed(2)

        usdInput.value = formatCurrency(result)
    }
}
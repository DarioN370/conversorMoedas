function avisar() {
    alert("Opaa!! Disparei")
}

let botao = document.querySelector("#botao") // aqui eu estou selecionando o objeto no HTML com o ID botao, e armazenando ele na variavel botao

botao.addEventListener("click", () => {
    avisar()
})

/*
vc pode criar a arrow function, assim como eu criei aqui em cima... ou dessa forma aqui de baixo, nessa de baixo a função recebe dois parametros, um é o evento, ou seja, no click, e a segunda é qual função voce quer que ela execute

document.addEventListener("click", avisar)
*/
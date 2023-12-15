function construirTabela() {
    let tabela = document.querySelector("#tabela tbody");
    let produto = document.querySelector("#produto").value;

    tabela.innerHTML ="";

    for(let i = 0 ; i < 10 ; i++) {
        let preco = Math.random() * 50 + 50
        let n = Math.floor(Math.random() * 10)
        let tipo = Math.floor(Math.random() * 7)
        
        let conteudo = `
                        <td>${lojas[n]}</td>
                        <td>${produto} ${modelo[tipo]}</td>
                        <td>R$ ${preco.toFixed(2).replace('.',',')}</td>
                        `
        let tr = document.createElement("tr")
        tr.innerHTML = conteudo;
        tabela.append(tr);
    }
}
document.querySelector("#btn").addEventListener('click', construirTabela)
let lojas = ["Carrefour", "Muffato", "Fast", "Magazine Luiza", "Kabum", "Pichau", "Mercado Livre", "Shoppe", "Aliexpress", "Amazon"]

let modelo = ["pad", "ergonômico", "gamer", "slim", "wireless", "serial", "usb"]

let inptText = document.querySelector('input')
inptText.addEventListener('keydown',function(e){
    if (e.key === 'Enter'){
        construirTabela()
    }
})


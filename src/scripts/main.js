const inputCEP = document.querySelector("#cep")
const btn = document.querySelector("#btn")
const dadosArea = document.querySelector(".dados-area")

inputCEP.addEventListener("keypress", function(e) {
    if(e.keyCode > 47 && e.keyCode < 58) {
        console.log("numero")
    } else {
        console.log("letra")
        e.preventDefault()
    }
})

inputCEP.onkeyup = function() {
    if(inputCEP.value.length == 5) {
        inputCEP.value += "-" // é o mesmo que inputCEP.value = inputCEP.value + "-"
    }
}

btn.onclick = function() {
    let cep = inputCEP.value
    let url = `https://viacep.com.br/ws/${cep}/json/`
    let mapaUrl = `https://www.google.com/maps/search/${cep}`
    
    if(inputCEP.value != ""){

        fetch(url).then(res=>res.json()).then(data=> {
            
            dadosArea.innerHTML = `
                Endereço: ${data.logradouro} <br>
                Bairro: ${data.bairro} <br>
                Cidade: ${data.localidade} <br>
                UF: ${data.uf} <br>
                IBGE: ${data.ibge} <br>
                <center>
                <a href="${mapaUrl}" target="_blank">
                    <button class="open-on-maps glassmorphism">ABRIR <br>NO MAPS</button>
                </a>
                </center>
            `

            dadosArea.classList.add("fade-in")
            
        })
    } else {
        alert("Você precisa digitar um CEP")
    }

}
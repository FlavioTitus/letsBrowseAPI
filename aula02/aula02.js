const container = document.querySelector('.container')
// container.append('ola mundo')

//InnerHtml - não é boa pratica pq executa tudo que está na página
//Gera problemas de segurança (cross site scripting)

const paragrafo = document.createElement('p')
paragrafo.innerText = 'Olá mundo'
container.append(paragrafo)

//inserindo uma ou mais classes no p
paragrafo.classList.add("classe","classe1")
paragrafo.classList.remove("classe1")

//.toggle == liga/desliga: se tem tira, se não tem, coloca
// Mais pratico usar o toggle do que a dupla add/remove
paragrafo.classList.toggle("classe1")
paragrafo.classList.toggle("classe1")
paragrafo.classList.toggle("classe2")

//inline style
paragrafo.style.backgroundColor = 'blue'

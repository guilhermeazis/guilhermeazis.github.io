/* Selecionar elementos */
const stars = document.querySelector('.container-header')
const selected = document.querySelector('.menu')

/* Função gerar estrelas no header */
const gerarEstrelas = () => {
    for (let index = 0; index < 150; index += 1) {
        const createStar = document.createElement('div')
        createStar.className = `star${index}`
        createStar.style.position = 'absolute'
        createStar.style.backgroundColor = 'aliceblue'
        createStar.style.marginTop = `${Math.floor(Math.random() * 180)}px`
        createStar.style.marginLeft = `${Math.floor(Math.random() * 750)}px`
        createStar.style.width = '10px'
        createStar.style.height = '10px'
        createStar.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
        stars.appendChild(createStar)
    }
}

/* Navegar de forma sincrona entre as páginas do menu */
const navegarViaAjax = (url, seletor, push = true) => {
    if (!url || !seletor) return
    const elemento = document.querySelector(seletor)
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            elemento.innerHTML = html
        })
}

document.querySelectorAll('[gap-link]').forEach(link => {
    const url = link.attributes['gap-link'].value
    const seletorDestino = link.attributes['gap-destino'].value
    link.onclick = e => {
        e.preventDefault()
        navegarViaAjax(url, seletorDestino)
    }
})

selected.onclick = e => {
const select = document.querySelector('.selected')
    if (select) {
        select.classList.remove('selected')
    }
    e.target.classList.add('selected')   
      
}

/* Carregar página inicial */
const carregarInicial = () => {
    const url = '../feed.html'
    const destino = '.pagina'
    navegarViaAjax(url, destino)
}

/* Ao carregar a página executa a função */
window.onload = () => {
    gerarEstrelas()
    carregarInicial()
}
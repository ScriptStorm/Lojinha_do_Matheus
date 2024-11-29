let carrinho = [];

function adicionarAoCarrinho(nome, imagem, preco) {
   
    carrinho.push({ nome, imagem, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('carrinho');
    carrinhoLista.innerHTML = ''; 

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <p><strong>${item.nome}</strong></p>
            <img src="${item.imagem}" alt="${item.nome}" style="max-width: 100px; height: auto;">
            <p>Preço: R$ ${item.preco.toFixed(2)}</p>
        `;
        carrinhoLista.appendChild(li);
    });

   
    document.getElementById('finalizarCompra').disabled = carrinho.length === 0;
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso! Obrigado por comprar na Loja Matheus Orgulho! 🌈');
    carrinho = []; 
    atualizarCarrinho(); 
}


document.querySelectorAll('.item button').forEach((button, index) => {
    const itemInfo = getItemInfo(index);
    button.onclick = () => adicionarAoCarrinho(itemInfo.nome, itemInfo.imagem, itemInfo.preco);
});


function getItemInfo(index) {
    const itens = [
        {
            nome: 'Cropped Ousadia & Alegria',
            imagem: 'cropped.jpg',
            preco: 79.90
        },
        {
            nome: 'Blusinha Fui No Arco-Íris, Caí na Drag Race',
            imagem: 'blusinha_arcoiris.jpg',
            preco: 79.90
        },
        {
            nome: 'Shorts Arco-íris Do Poder',
            imagem: 'shorts_arcoiris.jpg',
            preco: 99.90
        },
        {
            nome: 'Tiara de Unicórnio Com Glitter',
            imagem: 'tiara_unicornio.jpg',
            preco: 109.90
        },
        {
            nome: 'Bolsa Purpurina Cósmica',
            imagem: 'bolsa_purpurina.jpg',
            preco: 139.90
        },
        {
            nome: 'Chapéu Puf de Diva',
            imagem: 'chapeu_diva.jpg',
            preco: 99.90
        }
    ];

    return itens[index];
}

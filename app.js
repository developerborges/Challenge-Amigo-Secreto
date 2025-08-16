let amigos = [];


function adicionarAmigo(){
    let campoNome = document.getElementById('amigo');
    let nameAmigo = campoNome.value;

    if (nameAmigo == ''){
        alert("O campo não pode estar vazio, digite um nome valido");
        return;
    }
     amigos.push(nameAmigo);

     let listaHTML = document.getElementById('listaAmigos');
     listaHTML.innerHTML = '';

     for (let i = 0; i < amigos.length; i++){
        let lista = document.createElement('li');
        lista.textContent = amigos[i];
        listaHTML.appendChild(lista);
     }

     campoNome.value = '';
     campoNome.focus();
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert("Adicione pelo menos 2 amigos, para soertear!!!!");
        return;
    }
    let indiceAmigoSorteado = Math.floor(Math.random()* amigos.length);

    let amigoSorteado = amigos[indiceAmigoSorteado];
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>${amigoSorteado}</li>`;


}
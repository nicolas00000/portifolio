const projects = [
    {  title: "Pokedex", description:"Utilizando uma api gratuita, desenvolvi uma pokedex, onde cada pokemon possui um ID que pode ser buscado", link:"https://nicolas00000.github.io/pokemon/", url: "pokedex"},
    {  title: "Previsão do tempo", description:"Desenvolvi uma interface facil e intuitiva para pesquisa de previsão do tempo para qualquer cidade do mundo", link:"https://nicolas00000.github.io/weather-app/", url: "weater"},
    {  title: "Whatsapp", description:"Chat em tempo real, usando uma API de um projeto da DRIVEN, fiz o meu proprio Whatsapp", link:"https://nicolas00000.github.io/whatsApp-clone/", url: "whats"},
    {  title: "Lista de tarefas", description:"To do List é onde você pode guardar todos os suas tarefas, podendo riscar quando completar, ou à apagar", link:"https://nicolas00000.github.io/to-do-list/", url: "todo"},
    {  title: "Buzz Quizz", description:"Uma API dada pela DRIVEN, fizemos um jogo de quizz, onde o usuario pode criar um jogo, ou jogar o de alguém", link:"https://nicolas00000.github.io/BuzzQuizz/", url: "quizz"},
    {  title: "Gerador Qr-code", description:"Design feito diretamente por mim, pegando uma api aberta, fiz onde um link vira um qrcode", link:"https://nicolas00000.github.io/qr-code-generator/", url: "qrcode"},
    {  title: "Ifood", description:"Na DRIVEN, uma atividade de recriar interface de um aplicativo de pedidos de comidas, e mandar o pedido pelo whatsapp", link:"https://nicolas00000.github.io/Ifood-FoodBox-/", url: "ifood"},
    { title: "Calculadora", description:"Usando apenas javaScript fiz uma calculadora web responsiva, podendo fazer apenas contas simples", link:"https://nicolas00000.github.io/calculadora/", url: "calculadora"},
    {  title: "Mario game", description:"Atividade do Canal HORA DE CODAR, feito um mini game do mario, podendo pular os canos e ir cada vez mais longe", link:"https://nicolas00000.github.io/marioJumpingGame", url: "mario"},
    // {  title: "Clone Spotify", description:"", link:"", url: ""},
    {  title: "Cronometro", description:"Me desafiei a fazer um cronometro com JS, e contendo botões para reiniciar, parar e gravar o tempo ", link:"https://nicolas00000.github.io/cronometro/", url: "cronometro"},
    {  title: "Instagram", description:"Clonei a interface do instagram, de forma responsiva simulando meu perfil", link:"https://nicolas00000.github.io/clone_instagram/", url: "insta"},
    {  title: "Contador de click", description:"Você sabe quantos clicks por segundo seu mouse faz, aqui você pode descobrir de forma gratuita", link:"https://nicolas00000.github.io/click-counter/", url: "click"},
    {  title: "Arrasta e solta", description:"Uma das primeira atividades que fiz, foi ensinado a fazermos um 'drag-and-drop'", link:"https://nicolas00000.github.io/ToDoList/", url: "drag"},
    {  title: "Em breve", description:"", link:"", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2vgRZBfHJoBUXc0kMhlYXkF9fOjSi9w62bEVo7zBcw&s"},
    {  hidden: "display: ", description:"", link:"", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2vgRZBfHJoBUXc0kMhlYXkF9fOjSi9w62bEVo7zBcw&s"},

]

render()
function render(){
    const container = document.querySelector(".carousel-slide")
    projects.forEach(element => {
        container.innerHTML += `
        <div class="card">
            <div class="closeButton">
                <span class="vermelho buttonclose"></span>
                <span class="amarelo buttonclose"></span>
                <span class="verde buttonclose"></span>
            </div>

            <h4 class="title-card">${element.title}</h4>
            
            <p class="description-card">
                ${element.description}
            </p>

            <div class="tecnologias">
                <i class="fa-brands fa-css3"></i>
                <i class="fa-brands fa-square-js"></i>
                <i class="fa-brands fa-bootstrap"></i>
                <i class="fa-brands fa-sass"></i>
            </div>

            <a href="${element.link}" class="project-image" style="background-image: url('./src/img/${element.url}.png');">
                <span class='redirection'> 
                    Confira aqui
                </span>
            </a>

        </div>
    
    `
    });
}
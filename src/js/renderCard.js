const projects = [
    {  title: "Pagina de login", description:"Criei uma tela de login segura para autenticação de usuários com email e senha e podendo se cadastrar", link:"login-page/", url: "login"},
    {  title: "Previsão do tempo", description:"Desenvolvi uma interface facil e intuitiva para pesquisa de previsão do tempo para qualquer cidade do mundo", link:"weather-app/", url: "weater"},
    {  title: "Pokedex", description:"Utilizando uma api gratuita, desenvolvi uma pokedex, onde cada pokemon possui um ID que pode ser buscado", link:"pokemon/", url: "pokedex"},
    {  title: "Clone Whatsapp", description:"Chat em tempo real, usando uma API de um projeto da DRIVEN, fiz o meu proprio Whatsapp", link:"whatsApp-clone/", url: "whats"},
    {  title: "Lista de tarefas", description:"To do List é onde você pode guardar todos os suas tarefas, podendo riscar quando completar, ou à apagar", link:"to-do-list/", url: "todo"},
    {  title: "Clone Ifood", description:"Na DRIVEN, uma atividade de recriar interface de um aplicativo de pedidos de comidas, e mandar o pedido pelo whatsapp", link:"Ifood-FoodBox-/", url: "ifood"},
    {  title: "Buzz Quizz", description:"Uma API dada pela DRIVEN, fizemos um jogo de quizz, onde o usuario pode criar um jogo, ou jogar o de alguém", link:"BuzzQuizz/", url: "quizz"},
    {  title: "Gerador Qr-code", description:"Design feito diretamente por mim, pegando uma api aberta, fiz onde um link vira um qrcode", link:"qr-code-generator/", url: "qrcode"},
    {  title: "Clone Instagram", description:"Clonei a interface do instagram, de forma responsiva simulando meu perfil", link:"clone_instagram/", url: "insta"},
    {  title: "Contador de click", description:"Você sabe quantos clicks por segundo seu mouse faz, aqui você pode descobrir de forma gratuita", link:"click-counter/", url: "click"},
    // { title: "Calculadora", description:"Usando apenas javaScript fiz uma calculadora web responsiva, podendo fazer apenas contas simples", link:"calculadora/", url: "calculadora"},
    // {  title: "Mario game", description:"Atividade do Canal HORA DE CODAR, feito um mini game do mario, podendo pular os canos e ir cada vez mais longe", link:"marioJumpingGame", url: "mario"},
    // {  title: "Clone Spotify", description:"", link:"", url: ""},
    // {  title: "Cronometro", description:"Me desafiei a fazer um cronometro com JS, e contendo botões para reiniciar, parar e gravar o tempo ", link:"cronometro/", url: "cronometro"},
    // {  title: "Arrasta e solta", description:"Uma das primeira atividades que fiz, foi ensinado a fazermos um 'drag-and-drop'", link:"ToDoList/", url: "drag"},
]

render()
function render(){
    const container = document.querySelector(".row")
    projects.forEach(element => {
        container.innerHTML += `
        <div class="card">
            <div class="closeButton">
                <span class="vermelho buttonclose"></span>
                <span class="amarelo buttonclose"></span>
                <span class="verde buttonclose"></span>
                <a href="
                    https://github.com/nicolas00000/${element.link}
                "> 
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
            <div class="img" style="background-image: url('./src/img/${element.url}.png');"></div>

            <div class="content">
                <p class="desc">
                    ${element.description}    
                    <br>
                </p>
                <div class="redirection">
                    <a href="
                        https://nicolas00000.github.io/${element.link}" Target="_blank" class="">
                        clique aqui
                    </a>
                </div>
            </div>

            <div class="arrow">
                <span>${element.title}</span>
            </div>
        </div>
    
    `
    });
}


document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
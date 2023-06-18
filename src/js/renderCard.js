const projects = [
    {  title: "Gerador de conselho", description:"Esse site pode te ajudar a motivar um pouco o seu dia, desenvolvidi toda lógica e interface em 2 horas", link:"https://advice-generator-lilac-sigma.vercel.app/", url: "conselhos", github:"advice-generator"},
    {  title: "Pagina de login", description:"Criei uma tela de login segura para autenticação de usuários com email e senha e podendo se cadastrar", link:"https://nicolas00000.github.io/login-page/", url: "login", github:"login-page "},
    {  title: "Previsão do tempo", description:"Desenvolvi uma interface facil e intuitiva para pesquisa de previsão do tempo para qualquer cidade do mundo", link:"https://nicolas00000.github.io/weather-app/", url: "weater", github:"weather-app"},
    {  title: "Pokedex", description:"Utilizando uma api gratuita, desenvolvi uma pokedex, onde cada pokemon possui um ID que pode ser buscado", link:"https://nicolas00000.github.io/pokemon/", url: "pokedex", github:"pokemon"},
    {  title: "Clone Whatsapp", description:"Chat em tempo real, usando uma API de um projeto da DRIVEN, fiz o meu proprio Whatsapp", link:"https://nicolas00000.github.io/whatsApp-clone/", url: "whats", github:"whatsApp-clone"},
    {  title: "Lista de tarefas", description:"To do List é onde você pode guardar todos os suas tarefas, podendo riscar quando completar, ou à apagar", link:"https://nicolas00000.github.io/to-do-list/", url: "todo", github:"to-do-list"},
    {  title: "Clone Ifood", description:"Na DRIVEN, uma atividade de recriar interface de um aplicativo de pedidos de comidas, e mandar o pedido pelo whatsapp", link:"https://nicolas00000.github.io/Ifood-FoodBox-/", url: "ifood", github:"Ifood-FoodBox-"},
    {  title: "Buzz Quizz", description:"Uma API dada pela DRIVEN, fizemos um jogo de quizz, onde o usuario pode criar um jogo, ou jogar o de alguém", link:"https://nicolas00000.github.io/BuzzQuizz/", url: "quizz", github:"BuzzQuizz"},
    {  title: "Gerador Qr-code", description:"Design feito diretamente por mim, pegando uma api aberta, fiz onde um link vira um qrcode", link:"https://nicolas00000.github.io/qr-code-generator/", url: "qrcode", github:"qr-code-generator"},
    {  title: "Clone Instagram", description:"Clonei a interface do instagram, de forma responsiva simulando meu perfil", link:"https://nicolas00000.github.io/clone_instagram/", url: "insta", github:"clone_instagram"},
    {  title: "Contador de click", description:"Você sabe quantos clicks por segundo seu mouse faz, aqui você pode descobrir de forma gratuita", link:"https://nicolas00000.github.io/click-counter/", url: "click", github:""},
    { title: "Calculadora", description:"Usando React fiz uma calculadora web responsiva, podendo fazer operações do nosso dia a dia", link:"https://nicolas00000.github.io/calculadora/", url: "calculadora", github:"calculadora "},
    {  title: "Mario game", description:"Atividade do Canal HORA DE CODAR, feito um mini game do mario, podendo pular os canos e ir cada vez mais longe", link:"https://nicolas00000.github.io/marioJumpingGame", url: "mario", github:"marioJumpingGame"},
    // {  title: "Clone Spotify", description:"", link:"", url: ""},
    {  title: "Cronometro", description:"Me desafiei a fazer um cronometro com JS, e contendo botões para reiniciar, parar e gravar o tempo ", link:"https://nicolas00000.github.io/cronometro/", url: "cronometro", github:"cronometro"},
    {  title: "Arrasta e solta", description:"Uma das primeira atividades que fiz, foi ensinado a fazermos um 'drag-and-drop'", link:"https://nicolas00000.github.io/drag-and-drop", url: "drag", github:"drag-and-drop "},
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
                    https://github.com/nicolas00000/${element.github}
                " Target="_blank" > 
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
                        ${element.link}" Target="_blank" class="">
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
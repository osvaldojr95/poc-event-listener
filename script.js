//###### RUN
addFuncionalidades();

//###### FUNCTIONS

function addFuncionalidades() {

    //Botões Select
    const listaButtons = document.querySelectorAll(".topo button");
    listaButtons.forEach((botao) => { botao.addEventListener("click", switchSelect); })

    //Test1
    const codigoBotaoAtr = document.querySelector(".test1 .code-botao-atr");
    codigoBotaoAtr.innerText = '<button onclick="test1SwitchColor(orange)"></button>'
    const codigoBotaoEvt = document.querySelector(".test1 .code-botao-evt");
    codigoBotaoEvt.innerText = 'botao.addEventListener("click", function () { test1SwitchColor("purple") })';
    const codigoFuncao = document.querySelector(".test1 .code-function");
    codigoFuncao.innerText = `
            function test1SwitchColor(color) {
                const sqr = document.querySelector(".square-test1");
                console.log("TESTE");

                if (color === "orange") {
                        sqr.classList.remove("purple");
                        sqr.classList.add("orange");
                    } else {
                        sqr.classList.remove("orange");
                        sqr.classList.add("purple");
                    }
            }`;
    const BotaoEvt = document.querySelector(".test1 .botao-evt");
    BotaoEvt.addEventListener("click", function () { test1SwitchColor("purple") })

    //Test2
    const codigoDiv = document.querySelector(".test2 .code-div");
    codigoDiv.innerText = 'divmenor.addEventListener("click",function () { test2Colors("ORANGE") })'
    const codigoDivMaior = document.querySelector(".test2 .code-div-maior");
    codigoDivMaior.innerText = 'divmaior.addEventListener("click",function () { test2Colors("PURPLE") })';
    const codigoFuncaotest2 = document.querySelector(".test2 .code-function");
    codigoFuncaotest2.innerText = `function test2Colors(color) {
        const sqr = document.querySelector(".text-test2");
        sqr.innerHTML = color;
    }`;
    const divmenor = document.querySelector(".test2 .square-test2");
    divmenor.addEventListener("click", function () { test2Colors("ORANGE") })
    const divmaior = document.querySelector(".test2 .square-maior-test2");
    divmaior.addEventListener("click", function () { test2Colors("PURPLE") })

    //Test3
    const codigoDiv3 = document.querySelector(".test3 .code-div");
    codigoDiv3.innerText = 'divmenor3.addEventListener("click",test3Menor)'
    const codigoDivMaior3 = document.querySelector(".test3 .code-div-maior");
    codigoDivMaior3.innerText = 'divmaior3.addEventListener("click", test3Maior)';
    const codigoFuncaotest3 = document.querySelector(".test3 .code-function");
    codigoFuncaotest3.innerText = `
    function test3Menor(e) {
        const sqr = document.querySelector(".text-test3");
        sqr.innerHTML = "ORANGE";
        e.stopPropagation();
    }
    
    function test3Maior(e) {
        const sqr = document.querySelector(".text-test3");
        sqr.innerHTML = "PURPLE";
        e.stopPropagation();
    }`;
    const divmenor3 = document.querySelector(".test3 .square-test3");
    divmenor3.addEventListener("click", test3Menor);
    const divmaior3 = document.querySelector(".test3 .square-maior-test3");
    divmaior3.addEventListener("click", test3Maior);

    //Test4
    const codigoDiv4 = document.querySelector(".test4 .code-div");
    codigoDiv4.innerText = 'divmenor4.addEventListener("click",test4Menor)'
    const codigoDivMaior4 = document.querySelector(".test4 .code-div-maior");
    codigoDivMaior4.innerText = 'divmaior4.addEventListener("click", test4Maior)';
    const codigoFuncaotest4 = document.querySelector(".test4 .code-function");
    codigoFuncaotest4.innerText = `
    function test4Menor(e) {
        const sqr = document.querySelector(".text-test4");
        sqr.innerHTML = "ORANGE";
        console.log("ORANGE");
    }
    
    function test4Maior(e) {
        const sqr = document.querySelector(".text-test4");
        sqr.innerHTML = "PURPLE";
        console.log("PURPLE");
    }`;
    const divmenor4 = document.querySelector(".test4 .square-test4");
    divmenor4.addEventListener("click", test4Menor, true);
    const divmaior4 = document.querySelector(".test4 .square-maior-test4");
    divmaior4.addEventListener("click", test4Maior, true);
}

function test1SwitchColor(color) {
    const sqr = document.querySelector(".square-test1");

    if (color === "orange") {
        sqr.classList.remove("purple");
        sqr.classList.add("orange");
    } else {
        sqr.classList.remove("orange");
        sqr.classList.add("purple");
    }
}

function test2Colors(color) {
    const sqr = document.querySelector(".text-test2");
    sqr.innerHTML = color;
}

function test3Menor(e) {
    const sqr = document.querySelector(".text-test3");
    sqr.innerHTML = "ORANGE";
    e.stopPropagation();
}

function test3Maior(e) {
    const sqr = document.querySelector(".text-test3");
    sqr.innerHTML = "PURPLE";
    e.stopPropagation();
}

function test4Menor(e) {
    const sqr = document.querySelector(".text-test4");
    sqr.innerHTML = "ORANGE";
    console.log("ORANGE");
}

function test4Maior(e) {
    const sqr = document.querySelector(".text-test4");
    sqr.innerHTML = "PURPLE";
    console.log("PURPLE");
}

function switchSelect(e) {
    const nossoConteudo = e.target.parentNode.parentNode.querySelector(".conteudo");
    const listaConteudos = document.querySelectorAll(".conteudo");

    listaConteudos.forEach((cont) => {
        if (cont === nossoConteudo) {
            cont.classList.remove("hidden");
        }
        else {
            cont.classList.add("hidden");
        }
    })

}
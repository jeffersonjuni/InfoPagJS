
            
            var retangulo2 = null;
            document.getElementById("consultarRendimento").addEventListener("click", function() {
                
                
                if (retangulo2 === null) {
                // Crie um elemento div para representar o retângulo
                retangulo2 = document.createElement("div");
        
                // Aplique estilos ao retângulo, incluindo posição
                retangulo2.style.width = "1362px";
                retangulo2.style.height = "487px";
                retangulo2.style.backgroundColor = "white";
                retangulo2.style.border = "2px solid black";
                retangulo2.style.position = "absolute"; // Defina a posição absoluta
                retangulo2.style.top = "450px"; // Ajuste conforme necessário, para posicioná-lo abaixo dos botões
                retangulo2.style.left = "250px"; // Ajuste conforme necessário
                
                // Crie um elemento de parágrafo para o texto
                var texto = document.createElement("p");
                texto.innerText = "Selecione o período que deseja:";
                texto.style.fontFamily = "arial";
                texto.style.fontSize = "30px"; 
                texto.style.position = "absolute";
                texto.style.textAlign = "left";
                texto.style.top = "120px";
                texto.style.left = "20px";
    
                // Crie um elemento de parágrafo para o texto "Veja aqui seus rendimentos"
                var textoRendimentos = document.createElement("p");
                textoRendimentos.innerText = "Veja aqui seu rendimento:";
                textoRendimentos.style.fontSize = "32px"; // Tamanho da fonte
                textoRendimentos.style.fontWeight = "bold"; // Deixa o texto em negrito
                textoRendimentos.style.fontFamily = "arial";
                textoRendimentos.style.position = "absolute"; // Defina a posição 
                textoRendimentos.style.textAlign = "left"; // Alinhar o texto ao centro
                textoRendimentos.style.top = "-10px"; // Ajuste conforme necessário
                textoRendimentos.style.left = "20px";
    
                // Crie um elemento de parágrafo para o texto "Matrícula"
                var textoCPF = document.createElement("p");
                textoCPF.innerText = "CPF:";
                textoCPF.style.fontFamily = "arial";
                textoCPF.style.fontSize = "32px"; // Tamanho da fonte do texto
                textoCPF.style.textAlign = "left"; // Alinhar o texto ao centro
                textoCPF.style.position = "absolute"; // Defina a posição absoluta
                textoCPF.style.top = "55px"; // Ajuste conforme necessário
                textoCPF.style.left = "20px";
                
                // Crie um elemento de parágrafo para o texto "Matrícula"
                var textoCPFADMCPF = document.createElement("p");
                textoCPFADMCPF.innerText = "123.456.789-00";
                textoCPFADMCPF.style.fontFamily = "arial";
                textoCPFADMCPF.style.fontSize = "30px"; // Tamanho da fonte do texto
                textoCPFADMCPF.style.textAlign = "left"; // Alinhar o texto ao centro
                textoCPFADMCPF.style.position = "absolute"; // Defina a posição absoluta
                textoCPFADMCPF.style.top = "58px"; // Ajuste conforme necessário
                textoCPFADMCPF.style.left = "100px"; 
                
                       
                
                // Crie um botão para selecionar o ano
                var botaoAno = document.createElement("select");
                botaoAno.innerText = "Ano";
                botaoAno.style.cursor = "pointer"; //ALterar o mouse
                botaoAno.style.fontFamily = "arial";
                botaoAno.style.fontStyle = "normal";
                botaoAno.style.textAlign = "center";
                botaoAno.style.padding = ""
                botaoAno.style.width = "150px"; // Largura do botão de ano
                botaoAno.style.height = "40px"; // Altura do botão de ano
                botaoAno.style.fontSize = "20px"; // Tamanho da fonte do botão de ano
                botaoAno.style.position = "absolute";
                botaoAno.style.top = "150px"; // Posição superior do botão de ano
                botaoAno.style.left = "450px"; // Posição esquerda do botão de ano
                botaoAno.className = "year-selector"; // Adicione a classe de estilo
                for (var i = new Date().getFullYear(); i >= 2013; i--) {
                var option = document.createElement("option");
                option.value = i;
                option.text = i;
                botaoAno.appendChild(option);
                 }
                
        
                // Crie um botão "Consultar"
                var botaoConsultar = document.createElement("button");
                botaoConsultar.innerText = "Consultar";
                botaoConsultar.style.backgroundColor = "white";
                botaoConsultar.style.color = "black";
                botaoConsultar.style.cursor = "pointer"; //ALterar o mouse
                botaoConsultar.style.fontFamily = "arial";
                botaoConsultar.style.width = "180px"; // Largura do botão "Consultar"
                botaoConsultar.style.height = "40px"; // Altura do botão "Consultar"
                botaoConsultar.style.fontSize = "20px"; // Tamanho da fonte do botão "Consultar"
                botaoConsultar.style.fontStyle = "normal";
                botaoConsultar.style.position = "absolute";
                botaoConsultar.style.top = "150px"; // Posição superior do botão "Consultar"
                botaoConsultar.style.left = "650px"; // Posição esquerda do botão "Consultar"
                botaoConsultar.addEventListener("mouseover", function(){
                botaoConsultar.style.backgroundColor = "#0F0F33"
                botaoConsultar.style.color = "white";
            });
            botaoConsultar.addEventListener("mouseout", function(){
                botaoConsultar.style.backgroundColor = "white"
                botaoConsultar.style.color = "black";
            });

                 // Adicione um evento de clique ao botão "Consultar"
            botaoConsultar.onclick = function() {
            // Abrir uma nova página em branco com a largura e altura da tela do monitor
            var larguraTela = window.screen.width;
            var alturaTela = window.screen.height;
            var novaPagina = window.open("", "_blank", "width=" + larguraTela + ",height=" + alturaTela);

            // Aplicar estilos personalizados à nova página
            novaPagina.document.documentElement.style.background = "white";
            novaPagina.document.body.style.display = "flex";
            novaPagina.document.body.style.flexDirection = "column";
            novaPagina.document.body.style.justifyContent = "center";
            novaPagina.document.body.style.alignItems = "center";
            novaPagina.document.body.style.position = "relative";

            // Criar botão "Salvar" na nova página
            var botaoSalvar = novaPagina.document.createElement("button");
            botaoSalvar.innerText = "Salvar";
            botaoSalvar.style.cursor = "pointer";
            botaoSalvar.style.fontFamily = "arial";
            botaoSalvar.style.width = "150px";
            botaoSalvar.style.height = "40px";
            botaoSalvar.style.fontSize = "20px";
            botaoSalvar.style.fontStyle = "normal";
            botaoSalvar.style.position = "absolute";
            botaoSalvar.style.bottom = "10px"; // Posição inferior do botão "Salvar"
            botaoSalvar.style.left = "10px"; // Posição esquerda do botão "Salvar"

            // Criar botão "Imprimir" na nova página
            var botaoImprimir = novaPagina.document.createElement("button");
            botaoImprimir.innerText = "Imprimir";
            botaoImprimir.style.cursor = "pointer";
            botaoImprimir.style.fontFamily = "arial";
            botaoImprimir.style.width = "150px";
            botaoImprimir.style.height = "40px";
            botaoImprimir.style.fontSize = "20px";
            botaoImprimir.style.fontStyle = "normal";
            botaoImprimir.style.position = "absolute";
            botaoImprimir.style.bottom = "10px"; // Posição inferior do botão "Imprimir"
            botaoImprimir.style.left = "170px"; // Posição esquerda do botão "Imprimir"

            // Adicione os botões à nova página
            novaPagina.document.body.appendChild(botaoSalvar);
            novaPagina.document.body.appendChild(botaoImprimir);
            };

            // Adicione o botão "Consultar" ao corpo do documento
             document.body.appendChild(botaoConsultar);
        
                // Adicione os elementos ao retângulo
                retangulo2.appendChild(texto);
                retangulo2.appendChild(textoCPF);
                retangulo2.appendChild(textoRendimentos);
                retangulo2.appendChild(textoCPFADMCPF);
                retangulo2.appendChild(botaoAno);
                retangulo2.appendChild(botaoConsultar);
                
                
                // Adicione o retângulo ao DOM (por exemplo, ao final do corpo do documento)
                document.body.appendChild(retangulo2);
                } else {
                // Se o retângulo já está aberto, remova-o
                document.body.removeChild(retangulo2);
                retangulo2 = null;
                }
                
                // Adicione event listeners para capturar cliques fora do retângulo e do botão
        document.addEventListener("click", function(event) {
            if (retangulo2 && !retangulo2.contains(event.target) && event.target !== document.getElementById("consultarRendimento")) {
                document.body.removeChild(retangulo2);
                retangulo2 = null; // Defina a variável retangulo como nulo para que o retângulo seja recriado se o botão for clicado novamente
            }
        });
            });

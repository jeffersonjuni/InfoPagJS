
        
        var retangulo = null;
        document.getElementById("consultarContracheque").addEventListener("click", function() {
            if (retangulo === null) {
            // Crie um elemento div para representar o retângulo
            retangulo = document.createElement("div");
  
            // Aplique estilos ao retângulo, incluindo posição
            retangulo.style.width = "1362px";
            retangulo.style.height = "487px";
            retangulo.style.backgroundColor = "white";
            retangulo.style.border = "2px solid black";
            retangulo.style.position = "absolute"; // Defina a posição absoluta
            retangulo.style.top = "450px"; // Ajuste conforme necessário, para posicioná-lo abaixo dos botões
            retangulo.style.left = "250px"; // Ajuste conforme necessário
            
    
            // Crie um elemento de parágrafo para o texto
            var texto = document.createElement("p");
            texto.innerText = "Selecione o período que deseja:";
            texto.style.fontFamily = "arial";
            texto.style.fontSize = "30px"; 
            texto.style.position = "absolute";
            texto.style.textAlign = "left";
            texto.style.top = "120px";
            texto.style.left = "20px";
            

            // Crie um elemento de parágrafo para o texto "Veja aqui seu contracheque"
            var textoContracheque = document.createElement("p");
            textoContracheque.innerText = "Veja aqui seu contracheque:";
            textoContracheque.style.fontSize = "30px"; // Tamanho da fonte
            textoContracheque.style.fontWeight = "bold"; // Deixa o texto em negrito
            textoContracheque.style.fontFamily = "arial";
            textoContracheque.style.position = "absolute"; // Defina a posição 
            textoContracheque.style.textAlign = "left"; // Alinhar o texto ao centro
            textoContracheque.style.top = "-10px"; // Ajuste conforme necessário
            textoContracheque.style.left = "20px";
            

            // Crie um elemento de parágrafo para o texto "Matrícula"
            var textoCPF = document.createElement("p");
            textoCPF.innerText = "CPF:";
            textoCPF.style.fontFamily = "arial";
            textoCPF.style.fontSize = "30px"; // Tamanho da fonte do texto
            textoCPF.style.textAlign = "left"; // Alinhar o texto ao centro
            textoCPF.style.position = "absolute"; // Defina a posição absoluta
            textoCPF.style.top = "55px"; // Ajuste conforme necessário
            textoCPF.style.left = "20px";
            
           // Crie um elemento de parágrafo para o texto "Matrícula"
           var textoCPFADMCPF = document.createElement("p");
           textoCPFADMCPF.innerText = "009.876.543-21";
           textoCPFADMCPF.style.fontFamily = "arial";
           textoCPFADMCPF.style.fontSize = "30px"; // Tamanho da fonte do texto
           textoCPFADMCPF.style.textAlign = "left"; // Alinhar o texto ao centro
           textoCPFADMCPF.style.position = "absolute"; // Defina a posição absoluta
           textoCPFADMCPF.style.top = "56px"; // Ajuste conforme necessário
           textoCPFADMCPF.style.left = "100px"; 
            
            // Crie um botão para selecionar o mês
            var botaoMes = document.createElement("select");
            botaoMes.className = "month-selector"; // Adicione a classe de estilo
            botaoMes.innerText = "Mês";
            botaoMes.style.cursor = "pointer"; //ALterar o mouse
            botaoMes.style.fontFamily = "arial";
            botaoMes.style.fontStyle = "normal";
            botaoMes.style.width = "150px"; // Largura do botão de mês
            botaoMes.style.height = "40px"; // Altura do botão de mês
            botaoMes.style.fontSize = "20px"; // Tamanho da fonte do botão de mês
            botaoMes.style.position = "absolute";
            botaoMes.style.textAlign = "center";
            botaoMes.style.top = "150px"; // Posição superior do botão de mês
            botaoMes.style.left = "450px"; // Posição esquerda do botão de mês 
            botaoMes.innerHTML = `
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            `;

            
            // Crie um botão para selecionar o ano
            var botaoAno = document.createElement("select");
            botaoAno.innerText = "Ano";
            botaoAno.style.cursor = "pointer"; //ALterar o mouse
            botaoAno.style.fontFamily = "arial";
            botaoAno.style.fontStyle = "normal";
            botaoAno.style.width = "150px"; // Largura do botão de ano
            botaoAno.style.height = "40px"; // Altura do botão de ano
            botaoAno.style.fontSize = "20px"; // Tamanho da fonte do botão de ano
            botaoAno.style.position = "absolute";
            botaoAno.style.textAlign = "center";
            botaoAno.style.top = "150px"; // Posição superior do botão de ano
            botaoAno.style.left = "650px"; // Posição esquerda do botão de ano
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
            botaoConsultar.style.cursor = "pointer"; //ALterar o mouse
            botaoConsultar.style.fontFamily = "arial";
            botaoConsultar.style.width = "180px"; // Largura do botão "Consultar"
            botaoConsultar.style.height = "40px"; // Altura do botão "Consultar"
            botaoConsultar.style.fontSize = "20px"; // Tamanho da fonte do botão "Consultar"
            botaoConsultar.style.fontStyle = "normal";
            botaoConsultar.style.position = "absolute";
            botaoConsultar.style.top = "150px"; // Posição superior do botão "Consultar"
            botaoConsultar.style.right = "335px"; // Posição esquerda do botão "Consultar"
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
            retangulo.appendChild(texto);
            retangulo.appendChild(textoCPF);
            retangulo.appendChild(textoContracheque);
            retangulo.appendChild(textoCPFADMCPF);
            retangulo.appendChild(botaoMes);
            retangulo.appendChild(botaoAno);
            retangulo.appendChild(botaoConsultar);
            
            
            // Adicione o retângulo ao DOM (por exemplo, ao final do corpo do documento)
            document.body.appendChild(retangulo);
           } else {
            // Se o retângulo já está aberto, remova-o
            document.body.removeChild(retangulo);
            retangulo = null;
            }



            // Adicione event listeners para capturar cliques fora do retângulo e do botão
            document.addEventListener("click", function(event) {
            if (retangulo && !retangulo.contains(event.target) && event.target !== document.getElementById("consultarContracheque")) {
                document.body.removeChild(retangulo);
                retangulo = null; // Defina a variável retangulo como nulo para que o retângulo seja recriado se o botão for clicado novamente
            }
            });
             
        });
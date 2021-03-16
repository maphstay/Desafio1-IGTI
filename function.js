//FUNÇÃO LISTAR FUNCIONÁRIOS
function loadDoc () {

var xmlhttp = new XMLHttpRequest();
var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var lista = JSON.parse(this.responseText);
        let test = document.getElementById("tb");
        if (test !== null) {
                document.getElementById("tb").remove();
        }
        
        //CRIA CABEÇALHO DA TABELA
        for (let i = 0; i < 1; i++) {
            var tb = document.createElement("table");
            var lin0 = document.createElement("tr");
            var col0 = document.createElement("th");
            var col1 = document.createElement("th");
            var col2 = document.createElement("th");
            tb.id = "tb"
            lin0.innerHTML = "";
            col0.innerHTML = "Nome"; 
            col1.innerHTML = "Salário"; 
            col2.innerHTML = "Setor";
            document.getElementById("ptb").appendChild(tb);
            document.getElementById("tb").appendChild(lin0);
            document.getElementById("tb").appendChild(col0);
            document.getElementById("tb").appendChild(col1);
            document.getElementById("tb").appendChild(col2);
        }

        //CRIA CORPO E INSERE CONTEÚDO Á TABELA
        for (let i = 0; i < lista.funcionarios.length; i++) {
            var el0 = document.createElement("tr");
            var el1 = document.createElement("td");
            var el2 = document.createElement("td");
            var el3 = document.createElement("td");
            el0.innerHTML = "";
            el1.innerHTML = lista.funcionarios[i].nome; 
            el2.innerHTML = `R$${lista.funcionarios[i].salario}`; 
            el3.innerHTML = lista.funcionarios[i].setor;
            document.getElementById("tb").appendChild(el0);
            document.getElementById("tb").appendChild(el1);
            document.getElementById("tb").appendChild(el2);
            document.getElementById("tb").appendChild(el3);
        }
    }       
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
};

//FUNÇÃO MAIOR SALÁRIO
function mSalario () {

    var xmlhttp = new XMLHttpRequest();
    var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            let test = document.getElementById("tb");
            if (test !== null) {
                document.getElementById("tb").remove();
            }

            //CRIA CABEÇALHO DA TABELA
            for (let i = 0; i < 1; i++) {
                var tb = document.createElement("table");
                var lin0 = document.createElement("tr");
                var col0 = document.createElement("th");
                var col1 = document.createElement("th");
                var col2 = document.createElement("th");
                tb.id = "tb"
                lin0.innerHTML = "";
                col0.innerHTML = "Nome"; 
                col1.innerHTML = "Salário"; 
                col2.innerHTML = "Setor";
                document.getElementById("ptb").appendChild(tb);
                document.getElementById("tb").appendChild(lin0);
                document.getElementById("tb").appendChild(col0);
                document.getElementById("tb").appendChild(col1);
                document.getElementById("tb").appendChild(col2);
            }

                //FORMULA DO MAIOR SALÁRIO
                let sal = 0, maiorSal = 0, maiorNome = "", maiorSetor = "";
            for (let i = 0; i < lista.funcionarios.length; i++) {
                    sal = lista.funcionarios[i].salario
                if (sal > maiorSal) {
                    maiorSal = sal
                    maiorNome = lista.funcionarios[i].nome
                    maiorSetor = lista.funcionarios[i].setor
                }
            }

                //CRIA CORPO E INSERE CONTEÚDO Á TABELA
                var el0 = document.createElement("tr");
                var el1 = document.createElement("td");
                var el2 = document.createElement("td");
                var el3 = document.createElement("td");
                el0.innerHTML = "";
                el1.innerHTML = maiorNome; 
                el2.innerHTML = `R$${maiorSal}`; 
                el3.innerHTML = maiorSetor;
                document.getElementById("tb").appendChild(el0);
                document.getElementById("tb").appendChild(el1);
                document.getElementById("tb").appendChild(el2);
                document.getElementById("tb").appendChild(el3);
        }
            
    }       
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

//FUNÇÃO MENOR SALÁRIO
function menorSalario () {

    var xmlhttp = new XMLHttpRequest();
    var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            let test = document.getElementById("tb");
            if (test !== null) {
                document.getElementById("tb").remove();
            }

            //CRIA CABEÇALHO DA TABELA
            for (let i = 0; i < 1; i++) {
                var tb = document.createElement("table");
                var lin0 = document.createElement("tr");
                var col0 = document.createElement("th");
                var col1 = document.createElement("th");
                var col2 = document.createElement("th");
                tb.id = "tb"
                lin0.innerHTML = "";
                col0.innerHTML = "Nome"; 
                col1.innerHTML = "Salário"; 
                col2.innerHTML = "Setor";
                document.getElementById("ptb").appendChild(tb);
                document.getElementById("tb").appendChild(lin0);
                document.getElementById("tb").appendChild(col0);
                document.getElementById("tb").appendChild(col1);
                document.getElementById("tb").appendChild(col2);
            }

                //FORMULA DO MENOR SALÁRIO
                let sal = 0, menorSal = 99999, menorNome = "", menorSetor = "";
            for (let i = 0; i < lista.funcionarios.length; i++) {
                    sal = lista.funcionarios[i].salario
                if (sal < menorSal) {
                    menorSal = sal
                    menorNome = lista.funcionarios[i].nome
                    menorSetor = lista.funcionarios[i].setor
                }
            }

                //CRIA CORPO E INSERE CONTEÚDO Á TABELA
                var el0 = document.createElement("tr");
                var el1 = document.createElement("td");
                var el2 = document.createElement("td");
                var el3 = document.createElement("td");
                el0.innerHTML = "";
                el1.innerHTML = menorNome; 
                el2.innerHTML = `R$${menorSal}`; 
                el3.innerHTML = menorSetor;
                document.getElementById("tb").appendChild(el0);
                document.getElementById("tb").appendChild(el1);
                document.getElementById("tb").appendChild(el2);
                document.getElementById("tb").appendChild(el3);
        }
            
    }       
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

//FUNÇÃO MÉDIA SALARIAL
function media () {

    var xmlhttp = new XMLHttpRequest();
    var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            let test = document.getElementById("tb");
            if (test !== null) {
                document.getElementById("tb").remove();
            }

                //FORMULA DA MÉDIA SALARIAL
                let sal = 0, media = 0, qtd = lista.funcionarios.length;
            for (let i = 0; i < qtd; i++) {
                sal += lista.funcionarios[i].salario
                media = sal/qtd
            }     
            
                //INSERE O RESULTADO A TELA
                var el0 = document.createElement("h2");
                el0.id = "tb"
                el0.innerHTML = `A média salarial é de: </br>R$${media.toFixed(2)}`;
                document.getElementById("ptb").appendChild(el0);        
        }
        
    }   
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

//FUNÇÃO SALARIO POR SETOR
function salSetor () {

    var xmlhttp = new XMLHttpRequest();
    var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            let test = document.getElementById("tb");
            if (test !== null) {
                document.getElementById("tb").remove();
            }
     
                //CRIA OS ELEMENTOS INCLUINDO O SELECT E SUAS OPÇÕES
                var el0 = document.createElement("a");
                var el1 = document.createElement("h2");
                var el2 = document.createElement("select");
                var el21 = document.createElement("option");
                var el22 = document.createElement("option");
                var el23 = document.createElement("option");
                var el3 = document.createElement("button");
                var el4 = document.createElement("p");
                el0.id = "tb"
                el2.id = "sc"
                el4.id = "res"
                el21.value = "Administrativo"
                el22.value = "Comercial"
                el23.value = "Produção"
                el3.addEventListener("click", calc, false)
                el1.innerHTML = `Selecione o setor`;
                el21.innerHTML = `Administrativo`;
                el22.innerHTML = `Comercial`;
                el23.innerHTML = `Produção`;
                el3.innerHTML = `Ok`;
                document.getElementById("ptb").appendChild(el0);
                document.getElementById("tb").appendChild(el1); 
                document.getElementById("tb").appendChild(el2);
                document.getElementById("sc").appendChild(el21);  
                document.getElementById("sc").appendChild(el22);                                               
                document.getElementById("sc").appendChild(el23);
                document.getElementById("tb").appendChild(el3);
                document.getElementById("tb").appendChild(el4);
        }
        
    }   
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};

//FUNÇÃO DO BOTÃO DE CALCULAR MAIOR, MENOR SALARIO E MEDIA POR SETOR
function calc () {

    var xmlhttp = new XMLHttpRequest();
    var url = "funcionarios.json"; //LOCAL DO ARQUIVO JSON AQUI
    
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var lista = JSON.parse(this.responseText);
            let test = document.getElementById("h3");
            if (test !== null) {
                document.getElementById("h3").remove();
            }
            let setor = document.getElementById("sc").value;
            let sal = 0, menorSal = 99999, media = 0, maiorSal = 0,func1 = [], sal1 = [], j = 0, maiorNome = "", menorNome = "", qtd = lista.funcionarios.length;
            
            //FILTRO DE FUNCIONARIOS PELO SETOR SELECIONADO
            for (let i = 0; i < qtd; i++) {
                if (lista.funcionarios[i].setor == setor) {
                    func1[j] = lista.funcionarios[i].nome
                    sal1[j] = lista.funcionarios[i].salario
                    j++
                }
            }
            
            //SALARIO MAIS ALTO POR SETOR
            for (i = 0; i < func1.length; i++) {
                sal = sal1[i]
                if (sal > maiorSal) {
                    maiorSal = sal
                    maiorNome = func1[i]    
                }
            }

            //SALARIO MAIS BAIXO POR SETOR
            for (let i = 0; i < func1.length; i++) {
                sal = sal1[i]
                if (sal < menorSal) {
                    menorSal = sal
                    menorNome = func1[i]
                }
            }

            //MEDIAL SALARIAL DO SETOR
            for (let i = 0; i < func1.length; i++) {
                sal += sal1[i]
                media = sal/func1.length
            }     

            //INSERE RESULTADO NA TELA     
            var el0 = document.createElement("h3");
            el0.id = "h3"
            el0.innerHTML =`${maiorNome} possui o maior salário do setor no valor de R$${maiorSal}.</br>${menorNome} possui o menor salário do setor no valor de R$${menorSal}.</br>A média salarial do setor é de R$${media.toFixed(2)}.`
            document.getElementById("res").appendChild(el0);     
        }
        
    }   
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
};
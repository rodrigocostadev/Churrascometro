// carne 400 gramas por pessoa, + de 6 horas = 650 gramas

// cerveja 1500ml por homem, + de 5 horas 2500 ml
// cerveja 700ml por mulher, + de 5 horas 1400 ml
// criança não bebe cerveja

// pao de alho 100 gramas por pessoa
// linguicinha 100 gramas por pessoa
// maionese 1 batata media(s) e 1 ovo cozido e 1 ovo cru por pessoa 

// refri/agua 500ml por pessoa, + de 6 horas 800ml

// mulheres valem por 0,6
// crianças valem por 0,3

document.getElementById("calcular").addEventListener("click", function calcular () {

    //homens
    let homens = document.getElementById("homens")
    let nhomens = homens.value
    homens.value = ""    

    //mulheres
    let mulheres = document.getElementById("mulheres")
    let nmulheres = mulheres.value    
    mulheres.value = ""
    let floatmulheres = (nmulheres * 0.6)      

    //crianças
    let criancas = document.getElementById("criancas")
    let ncriancas = criancas.value    
    criancas.value = ""    
    let floatcrianca = (ncriancas * 0.3)
      

    //duração
    let duracao = document.getElementById("duracao")
    var nduracao = duracao.value
    duracao.value = ""

    //pessoas no total
    let pessoas = (parseFloat(nhomens) + floatcrianca + floatmulheres)    

    // if(nduracao > 0 || nduracao <= 5){
        if(nduracao > 0 && nduracao <= 4 ){
        //carne
        let carne = Math.ceil(pessoas* 0.4)
        let resultadocarne = (carne+" Kg de carne")
        let idcarne = document.getElementById("carne")     
        let criacarne =  document.createElement("p")      
        criacarne.textContent = resultadocarne
        idcarne.appendChild(criacarne)        

        //cerveja
        let cerveja = (nhomens*1.5 + nmulheres*0.7)
        let latinhas = Math.ceil(cerveja / 0.350)     //latinhas arredondar pra mais
        let resultadocerveja = (cerveja+" Litros de cerveja ou "+latinhas+" latinhas")
        let idcerveja = document.getElementById("cerveja")
        let criacerveja = document.createElement("p")
        criacerveja.textContent= resultadocerveja
        idcerveja.appendChild(criacerveja)

        //refri
        let refri = Math.round(pessoas*0.4)
        let resultadorefri = (refri+" Litros de refrigerante")
        let idrefri = document.getElementById("refri")
        let criarefri = document.createElement("p")
        criarefri.textContent = resultadorefri
        idrefri.appendChild(criarefri)

        //pao de alho
        let paodealho = Math.round(pessoas*100)
        let resultadopaodealho = (paodealho+" Gramas de pão de alho")
        let idpaodealho = document.getElementById("paodealho")
        let criapaodealho = document.createElement("p")
        criapaodealho.textContent = resultadopaodealho
        idpaodealho.appendChild(criapaodealho)

        //linguicinha
        let linguicinha = Math.round(pessoas*100)
        let resultadolinguicinha = (linguicinha+" Gramas de Linguicinha")
        let idlinguicinha = document.getElementById("linguicinha")
        let crialinguicinha = document.createElement("p")
        crialinguicinha.textContent = resultadolinguicinha
        idlinguicinha.appendChild(crialinguicinha)

        //maionese
        let batata = Math.ceil(pessoas*1)
        let ovocru = Math.ceil(pessoas*1)
        let ovocozido = Math.ceil(pessoas*1)
        let maionese = ("Maionese = "+batata+" Batata(s) media(s) "+ovocru+" Ovo(s) cru "+ovocozido+" Ovo(s) Cozido(s) ")
        let idmaionese = document.getElementById("maionese")
        let criamaionese = document.createElement("p")
        criamaionese.textContent = maionese
        idmaionese.appendChild(criamaionese)
    }

    else if(nduracao >= 5 ){        

        //carne
        let carne = Math.ceil(pessoas* 0.65)
        let resultadocarne = (carne+" Kg de carne")
        let idcarne = document.getElementById("carne")     
        let criacarne =  document.createElement("p")      
        criacarne.textContent = resultadocarne
        idcarne.appendChild(criacarne)    

        //cerveja
        let cerveja = Math.ceil(nhomens*2.5 + nmulheres*1.4)
        let resultadocerveja = (cerveja+" Litros de cerveja")
        let idcerveja = document.getElementById("cerveja")
        let criacerveja = document.createElement("p")
        criacerveja.textContent= resultadocerveja
        idcerveja.appendChild(criacerveja)

        //refri
        let refri = Math.round(pessoas*0.8)
        let resultadorefri = (refri+" Litros de refrigerante")
        let idrefri = document.getElementById("refri")
        let criarefri = document.createElement("p")
        criarefri.textContent = resultadorefri
        idrefri.appendChild(criarefri)

        //pao de alho
        let paodealho = Math.round(pessoas*100)
        let resultadopaodealho = (paodealho+" Gramas de pão de alho")
        let idpaodealho = document.getElementById("paodealho")
        let criapaodealho = document.createElement("p")
        criapaodealho.textContent = resultadopaodealho
        idpaodealho.appendChild(criapaodealho)                

        //linguicinha
        let linguicinha = Math.round(pessoas*100)
        let resultadolinguicinha = (linguicinha+" Gramas de Linguicinha")
        let idlinguicinha = document.getElementById("linguicinha")
        let crialinguicinha = document.createElement("p")
        crialinguicinha.textContent = resultadolinguicinha
        idlinguicinha.appendChild(crialinguicinha)

        //maionese
        let batata = Math.ceil(pessoas*1)
        let ovocru = Math.ceil(pessoas*1)
        let ovocozido = Math.ceil(pessoas*1)
        let maionese = ("Maionese = "+batata+" Batata(s) media(s) "+ovocru+" Ovo(s) cru "+ovocozido+" Ovo(s) Cozido(s) ")
        let idmaionese = document.getElementById("maionese")
        let criamaionese = document.createElement("p")
        criamaionese.textContent = maionese
        idmaionese.appendChild(criamaionese)
    }   

    else {
        let iderro = document.getElementById("erro")     
        let criaerro =  document.createElement("p")      
        criaerro.textContent = ("ERRO - Preencha todos os campos")
        iderro.appendChild(criaerro)       
    }    
})

document.getElementById("limpar").addEventListener("click", function limpar(){
        let carne = document.getElementById("carne")        
        let cerveja = document.getElementById("cerveja")        
        let refri = document.getElementById("refri")        
        let linguicinha = document.getElementById("linguicinha")
        let paodealho = document.getElementById("paodealho")
        let maionese = document.getElementById("maionese")
        let paofrances = document.getElementById("paofrances")
        let erro = document.getElementById("erro")
        erro.textContent = ""
        carne.textContent = ""
        cerveja.textContent = ""
        refri.textContent = ""
        linguicinha.textContent = ""
        paodealho.textContent = ""
        maionese.textContent = ""
        paofrances.textContent = ""
})


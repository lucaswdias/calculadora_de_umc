let sub = document.getElementById('calcular');

function imc(){

let nome = document.getElementById('nome').value;
let calcAlt = document.getElementById('alt').value;
let calcPeso = document.getElementById('peso').value;
let result = document.getElementById('resultado');

function adicionaerro(){
    calcAlt = document.getElementById('alt').classList.add('errocolor'),
    calcPeso = document.getElementById('peso').classList.add('errocolor'),
    nome = document.getElementById('nome').classList.add('errocolor')
}
function removerro(){
    calcAlt = document.getElementById('alt').classList.remove('errocolor'),
    calcPeso = document.getElementById('peso').classList.remove('errocolor'),
    nome = document.getElementById('nome').classList.remove('errocolor')
}


if(nome !== '' && calcAlt !== '' && calcPeso !== '' ){
   
   let calcImc = (calcPeso/(calcAlt*2)).toFixed(1);
   result.textContent = calcImc;
   let definicao =  '';
   if(calcImc <= 18.5){
     definicao = ' abaixo do peso';
   
   }else if(calcImc<=25){
    definicao =' Peso ideal';
  
   }else if (calcImc < 30){
     definicao= 'Levemente acima do peso';
 
    }else if(calcImc <35){
        definicao ='Obesidade grau I'
       
    }else if(calcImc < 40){
        definicao ='Obesidade grau II'
   
    }else {
        definicao ='Obesidade grau III procure a um médico'
    
    }
    result.textContent = `${nome} seu imc é ${calcImc} e você está ${definicao}`;
    removerro();
   
 
}else  {
    adicionaerro();
    result.textContent = 'Campos não preenchidos.'

}
}
sub.addEventListener('click', imc);
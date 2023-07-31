const form = document.querySelector('#form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso').value;
    const inputAltura = e.target.querySelector('#altura').value;

    const peso = Number(inputPeso);
    const altura = Number(inputAltura);

    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }
   
   const imc = getImc(peso,altura); 
    
   setResultado(imc);
});

function getImc(peso,altura){
    return (peso / altura ** 2).toFixed(2);
}

function criaParagrafo(){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = '';

    const p = criaParagrafo();
    p.innerHTML = msg;
    resultado.append(p);

}


/*function calculaIMC(evento) {

    resultado.innerHTML = "";
    resultadoIncorreto.innerHTML = "";
    evento.preventDefault();

    const peso = form.querySelector('.peso').value;
    const altura = form.querySelector('.altura').value;
    let IMC;

    IMC = peso / (altura ** 2);

    if(isNaN(peso) || isNaN(altura) || peso.length < 1 || altura.length < 1){
        resultadoIncorreto.innerHTML = `Altura ou peso inválido`;   
    }
    else if (IMC < 18.5) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)}(Abaixo do peso)`;
    } else if (IMC > 18.5 && IMC <= 24.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Peso normal)`;
    } else if (IMC >= 25 && IMC <= 29.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)`;
    } else if (IMC >= 30 && IMC <= 34.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 1)`;
    } else if (IMC >= 35 && IMC <= 39.9) {
        resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obesidade grau 2)`;
    } else {
        resultado.innerHTML = `Seu IMC é ${IMC} (Obesidade Grau 3)`
    }


}

form.addEventListener('submit', calculaIMC);*/

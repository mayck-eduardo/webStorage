function calcFatorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcFatorial(n - 1);
    }
}



function fatorial() {
    let input = document.getElementById("fatorial").value;
    let n = parseInt(input);

    document.getElementById("rFatorial").innerText = calcFatorial(n);
}

function arranjo() {
    let inputN = document.getElementById("arranjoN").value;
    let n = parseInt(inputN);
    let inputK = document.getElementById("arranjoK").value;
    let k = parseInt(inputK);


    //calculo do arranjo
    let resultado = calcFatorial(n) / calcFatorial(n - k);
    document.getElementById("rArranjo").innerText = resultado;
}


function matriz() {
    let a11 = document.getElementById("a11").value;
    let a12 = document.getElementById("a12").value;
    let a21 = document.getElementById("a21").value;
    let a22 = document.getElementById("a22").value;

    let b11 = document.getElementById("b11").value;
    let b12 = document.getElementById("b12").value;
    let b21 = document.getElementById("b21").value;
    let b22 = document.getElementById("b22").value;


    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            

        }

    }
    document.getElementById("rMatriz").innerText = a11;
}
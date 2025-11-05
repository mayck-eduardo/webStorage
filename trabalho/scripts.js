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


// matriz
function matriz() {
    // 1. CAPTURA DOS VALORES (AINDA COMO STRING)
    // Captura e conversão das matrizes A e B
    const a11n = parseInt(document.getElementById("a11").value),
          a12n = parseInt(document.getElementById("a12").value),
          a21n = parseInt(document.getElementById("a21").value),
          a22n = parseInt(document.getElementById("a22").value),
          b11n = parseInt(document.getElementById("b11").value),
          b12n = parseInt(document.getElementById("b12").value),
          b21n = parseInt(document.getElementById("b21").value),
          b22n = parseInt(document.getElementById("b22").value);

    // 2. ESTRUTURAÇÃO (usar as variáveis já convertidas)
    const A = [
        [a11n, a12n],
        [a21n, a22n]
    ];

    const B = [
        [b11n, b12n],
        [b21n, b22n]
    ];
    
    // Inicializamos a Matriz de Resultado C
    const C = [
        [0, 0],
        [0, 0]
    ];
    
    // Define o tamanho da matriz para os laços (N=2 para 2x2)
    const N = 2; 

    // 3. LAÇOS ANINHADOS PARA SOMA
    for (let i = 0; i < N; i++) { // i: percorre as LINHAS (0 e 1)
        for (let j = 0; j < N; j++) { // j: percorre as COLUNAS (0 e 1)
            // Soma o elemento na posição [i][j] de A e B
            C[i][j] = A[i][j] + B[i][j];
        }
    }

    // 4. EXIBIÇÃO DO RESULTADO
    document.getElementById("rMatriz").innerText =  
    `[ ${C[0][0]}  ${C[0][1]} ]\n` + 
    `[ ${C[1][0]}  ${C[1][1]} ]`;
}

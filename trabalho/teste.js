// matriz

function matriz() {
    // 1. CAPTURA DOS VALORES (AINDA COMO STRING)
    // Matriz A
    let a11 = document.getElementById("a11").value;
    let a12 = document.getElementById("a12").value;
    let a21 = document.getElementById("a21").value;
    let a22 = document.getElementById("a22").value;

    // Matriz B (Certifique-se de que os IDs no HTML são "b11", "b12", etc.)
    let b11 = document.getElementById("b11").value;
    let b12 = document.getElementById("b12").value;
    let b21 = document.getElementById("b21").value;
    let b22 = document.getElementById("b22").value;

    // --- A CHAVE PARA USAR O FOR ---
    // 2. ESTRUTURAÇÃO E CONVERSÃO
    // Convertemos os 8 inputs individuais em duas matrizes (Arrays de Arrays) 2x2.
    // Usamos parseFloat() para converter as strings em números.

    const A = [
        [parseFloat(a11) || 0, parseFloat(a12) || 0],
        [parseFloat(a21) || 0, parseFloat(a22) || 0]
    ];

    const B = [
        [parseFloat(b11) || 0, parseFloat(b12) || 0],
        [parseFloat(b21) || 0, parseFloat(b22) || 0]
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
            
            // Lógica Central: Soma o elemento na posição [i][j] de A e B
            C[i][j] = A[i][j] + B[i][j];
            
        } // Fim do laço de Colunas (j)
    } // Fim do laço de Linhas (i)

    // 4. EXIBIÇÃO DO RESULTADO
    // Formatamos o resultado da Matriz C para ser exibido.
    let resultadoFormatado = 
        `[ ${C[0][0]}  ${C[0][1]} ]\n` + 
        `[ ${C[1][0]}  ${C[1][1]} ]`;

    document.getElementById("rMatriz").innerText = resultadoFormatado;
}
/* Arquivo: permutacao_repeticao.c */

int permutacao_com_repeticao(int n, int k_array[], int num_grupos) {
    int denominador = 1;
    int i;
    
    for (i = 0; i < num_grupos; i++) {
        denominador = denominador * fatorial(k_array[i]);
    }
    
    return fatorial(n) / denominador;
}
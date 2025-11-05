/* Arquivo: fatorial.c */

int fatorial(int n) {
    int resultado = 1;
    int i;

    if (n < 0) return 0;
    if (n == 0) return 1;

    for (i = 1; i <= n; i++) {
        resultado = resultado * i;
    }
    return resultado;
}
/* Arquivo: combinacao.c */

int combinacao(int n, int k) {
    return fatorial(n) / (fatorial(k) * fatorial(n - k));
}
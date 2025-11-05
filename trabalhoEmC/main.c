/* Arquivo: main.c */

#include <stdio.h>

/*
 * AVISO: Incluir arquivos .c é incomum.
 * Isso funciona como "copiar e colar" o código dos outros
 * arquivos aqui, antes de compilar.
 * A ORDEM dos includes é muito importante!
 */
#include "fatorial.c"
#include "arranjo.c"
#include "combinacao.c"
#include "binomial.c"
#include "permutacao_simples.c"
#include "permutacao_repeticao.c"


int main() {
    int opcao;
    int n, k;
    int resultado; 

    do {
        printf("\n--- CALCULADORA DE ANALISE COMBINATORIA (v3) ---\n");
        printf("1. Fatorial\n");
        printf("2. Arranjo\n");
        printf("3. Binomial\n");
        printf("4. Combinacao\n");
        printf("5. Permutacao (Simples)\n");
        printf("6. Permutacao (Com Repeticao)\n");
        printf("0. Sair\n");
        printf("---------------------------------------------\n");
        printf("Escolha uma opcao: ");
        
        scanf("%d", &opcao);
        // AVISO: Sem a limpeza do buffer, se o usuário digitar
        // letras, o programa pode entrar em loop infinito.

        switch (opcao) {
            case 1: // Fatorial
                // AVISO: 'int' só aguenta até o fatorial de 12.
                printf("Digite o valor de n (max 12): ");
                scanf("%d", &n);
                resultado = fatorial(n);
                printf(">> Resultado: Fatorial de %d e %d\n", n, resultado);
                break;

            case 2: // Arranjo
            case 3: // Binomial
            case 4: // Combinação
                printf("Digite o valor de n (max 12): ");
                scanf("%d", &n);
                printf("Digite o valor de k: ");
                scanf("%d", &k);
                
                if (opcao == 2) {
                    resultado = arranjo(n, k);
                    printf(">> Resultado: Arranjo A(%d, %d) e %d\n", n, k, resultado);
                } else if (opcao == 3) {
                    resultado = binomial(n, k);
                    printf(">> Resultado: Binomial (%d | %d) e %d\n", n, k, resultado);
                } else {
                    resultado = combinacao(n, k);
                    printf(">> Resultado: Combinacao C(%d, %d) e %d\n", n, k, resultado);
                }
                break;

            case 5: // Permutação Simples
                printf("Digite o valor de n (max 12): ");
                scanf("%d", &n);
                resultado = permutacao_simples(n);
                printf(">> Resultado: Permutacao P(%d) e %d\n", n, resultado);
                break;

            case 6: // Permutação com Repetição
                printf("Digite n (TOTAL de elementos, max 12): ");
                scanf("%d", &n);

                int num_grupos;
                printf("Quantos grupos de elementos se repetem? ");
                scanf("%d", &num_grupos);
                
                // Array para as repetições
                int k_array[50]; 
                int i;
                
                for (i = 0; i < num_grupos; i++) {
                    printf("  Digite a qtd de repeticoes do grupo %d: ", i + 1);
                    scanf("%d", &k_array[i]);
                }
                
                resultado = permutacao_com_repeticao(n, k_array, num_grupos);
                printf(">> Resultado: Permutacao com repeticao e %d\n", resultado);
                break;

            case 0: // Sair
                printf("Ate logo!\n");
                break;

            default: // Opção inválida
                printf("Opcao invalida! Tente novamente.\n");
                break;
        }

    } while (opcao != 0);

    return 0;
}
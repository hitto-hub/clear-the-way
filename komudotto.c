#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int main(void){
    int randamu, j, count;
    int i = 1;
    srand((unsigned)time( NULL ));
    randamu = rand() % 10 + 1;
    printf("コムドット");
    while (i == 1){
        printf("が");
        randamu = rand() % 10 + 1;
        if(randamu >= 6) {
            j = j * 2;
            printf("通るから道");
        } else {
            j = j * 3;
            printf("日本");
        }
        printf("を");
        randamu = rand() % 10 + 1;
        if(randamu >= 6) {
            j = j * 5;
            printf("獲る");
            break;
        } else {
            j = j * 7;
            printf("あけろ俺ら");
        }
    }

    printf("\n");

    if (j == 210) {
        printf("おまえがコムドットだ！\n");
    }

    return 0;
}
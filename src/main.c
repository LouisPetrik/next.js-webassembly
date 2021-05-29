#include <stdio.h> 
#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int getNum() {
  return 69; 
}

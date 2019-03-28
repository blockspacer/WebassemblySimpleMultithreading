
#define WASM_EXPORT __attribute__((visibility("default"))) extern "C"

WASM_EXPORT int set( int adr , int value ) {	
	*(int*)adr = value;
  	return *(int*)adr;
}

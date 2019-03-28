
#define WASM_EXPORT __attribute__((visibility("default"))) extern "C"

 __attribute__((visibility("default"))) extern "C" int set( int adr , int value ) {	
	*(int*)adr = value;
  	return *(int*)adr;
}

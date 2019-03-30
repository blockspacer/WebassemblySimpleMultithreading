
#define export __attribute__((visibility("default"))) extern "C"

typedef void (*thread_entry_ptr_t)(void);

extern "C" {
	void startThread( thread_entry_ptr_t func );
	void someFunc();
}

void inf( ){
	someFunc();
	while (1){}
}

export int main( ) {	
	startThread( inf );
  	return 0;
}

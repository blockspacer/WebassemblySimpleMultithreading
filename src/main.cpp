
#define export __attribute__((visibility("default"))) extern "C"

#define dont_opt __attribute__ ((optnone))

typedef void (*thread_entry_ptr_t)(void);

extern "C" {
	int startThread( thread_entry_ptr_t func );
	void someFunc();
}

static volatile int i = 0;

void inf( ){
	someFunc();
	i = 1;	
	while (1){
		i += 1;
		if ( i > 10000 )
			break;
	}
}

export int lol(){
	return i;
}

export int main( ) {
  	return startThread( inf );
}

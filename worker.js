let table = new WebAssembly.Table({ initial: 1337, element: 'anyfunc' });

let imports = {
	env : { 
		memoryBase : 0,
		tableBase : 0,
		__indirect_function_table : table
	}
};

// impored functions
imports.env.someFunc    = ( ) => console.log("Worker: imports.env.someFunc called" )
imports.env.startThread = ( ) => console.log("Worker: cant start thread from worker!")


onmessage = function(e) {
	let thread_info = e.data;
	if( thread_info.command == "thread_start" ){
		imports.env.memory = thread_info.memory;
		( async () => {			
			let instance = await WebAssembly.instantiate(thread_info.module, imports)			
			let thread_entry_func = table.get( thread_info.thread_entry_ptr )
			thread_entry_func();			
			postMessage({
				command : "thread_ended"
			});// this tells the main thread that the worker is finished and now can do other stuff
		})();
	}
};

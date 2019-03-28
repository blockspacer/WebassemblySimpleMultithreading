var imports = { };
imports.env = { };
imports.env.memoryBase = 0;

imports.env.tableBase = 0;
imports.env.__indirect_function_table = new WebAssembly.Table({ initial: 1337, element: 'anyfunc' });

onmessage = function(e) {
    imports.env.memory = e.data;

    ( async () => {
		var path        = 'test.wasm';
		var response    = await fetch( path );
		var raw_buffer  = await response.arrayBuffer();
		var wasm_module = await WebAssembly.compile(raw_buffer)
		let instance    = await WebAssembly.instantiate(wasm_module, imports)
		
		const adr =  instance.exports.set(4,2)   
		
		postMessage( adr );
		postMessage( "worker run Successful" );
		
	})();
	
};
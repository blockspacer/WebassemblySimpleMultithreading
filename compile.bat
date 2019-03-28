"C:/Program Files/LLVM/bin/clang++" src/*.cpp -Oz -c -Wall --target=wasm32 -fvisibility=hidden -pthread
"C:/Program Files/LLVM/bin/wasm-ld" *.o --no-entry --allow-undefined --strip-all --export-dynamic --import-memory --shared-memory --import-table --max-memory=1310720 -o test.wasm
del *.o
pause
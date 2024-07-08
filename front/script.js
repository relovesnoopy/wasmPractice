// WebAssemblyモジュールの読み込み
const go = new Go();
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});

// JavaScriptによるループ
function jsLoop(count) {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += i;
    }
    return sum;
}

// ボタンクリック時の処理
function comparePerformance() {
    const count = parseInt(document.getElementById("loopCount").value);
    
    // GoのWasm関数を呼び出す
    const startGo = performance.now();
    const resultGo = goLoop(count);
    const endGo = performance.now();
    const timeGo = endGo - startGo;
    
    // JavaScriptの関数を呼び出す
    const startJs = performance.now();
    const resultJs = jsLoop(count);
    const endJs = performance.now();
    const timeJs = endJs - startJs;

    // 結果を表示
    document.getElementById("resultGo").textContent = `Go (Wasm): ${resultGo}, Time: ${timeGo.toFixed(2)} ms`;
    document.getElementById("resultJs").textContent = `JavaScript: ${resultJs}, Time: ${timeJs.toFixed(2)} ms`;
}

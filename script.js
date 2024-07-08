const go = new Go();
WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
    go.run(result.instance);
});

// wasmを用いてMarkdownをHTMLに変換
function convertMarkdownToHTMLWasm() {
    const markdownInput = document.getElementById('markdownInput').value;
    const start = performance.now();
    outputHtml = markdownToHTML(markdownInput)
    document.getElementById('output').innerHTML = outputHtml;
    // 実行時間を計測した処理
    const end = performance.now();
    console.log(end - start);
}

// JSライブラリを用いてMarkdownをHTMLに変換
function convertMarkdownToHTMLJS() {
    const markdownInput = document.getElementById('markdownInput').value;
    const start = performance.now();
    const outputHtml = marked.parse(markdownInput);
    document.getElementById('output').innerHTML = outputHtml;
    // 実行時間を計測した処理
    const end = performance.now();
    console.log(end - start);
}

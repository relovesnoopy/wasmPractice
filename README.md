# wasm とは

- WebAsembley
- Web ブラウザ上で高速に動作するバイナリコードの仕様
- C、C++、Rust 等の多様な言語からコンパイル
- ネイティブに近いパフォーマンスを Web ブラウザで発揮できる

# 特徴

- 高速実行
  - コンパイル済みのバイナリコードのためブラウザがコードを解析して実行する時間が短縮される
- 言語の多様性
  - C、C++、Rust など、さまざまなプログラミング言語で書かれたプログラムをコンパイルでき、既存のコードを Web ブラウザ上で実行できる
- 安全性

  - ブラウザのサンドボックス環境での実行
  - メモリ安全
  -

- ポータビリティ
  - OS やブラウザといったプラットフォームを問わず、一貫したパフォーマンスを実行できる

# まとめ

Wasm はウェブアプリケーションのパフォーマンスを向上させるための技術の 1 つ
JS 以外の言語採用により柔軟に開発を可能にします。

# wasm ファイル生成(go)

- 下記コマンドで wasm ビルド

```sh
cd src/
GOOS=js GOARCH=wasm go build -o ../main.wasm main.go
```

# wasm ファイル生成(rust)

```sh
# rustインストール
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# 環境変数設定
source $HOME/.cargo/env
# rustでwasmビルド用ツールインストール
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# rustプロジェクト作成
cargo new rust-wasm
# いい感じに
# wasmビルド(webはWebブラウザ実行用の指定)
wasm-pack build --target web
```

- Cargo.toml

```toml
[package]
name = "rust-wasm"
version = "0.1.0"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
```

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn rust_loop(loop_count: i32) -> i32 {
    // mutは可変を表すキーワード
    let mut sum = 0;

    for i in 0..loop_count {
        sum += i;
    }
    sum
}

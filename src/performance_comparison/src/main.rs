use std::time::{Instant, Duration};

fn main() {
    let start = Instant::now();

    // ここに計測したい処理を記述する
    let mut sum = 0;
    for i in 0..1000000000 {
        sum += i;
    }

    let elapsed = start.elapsed();

    // ミリ秒単位での処理時間を取得する
    let elapsed_ms = elapsed.as_secs_f64() * 1000.0;

    // 処理時間を出力する
    println!("処理時間: {:.2} ミリ秒", elapsed_ms);
}

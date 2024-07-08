package main

import (
	"syscall/js"
)

func goLoop(loop_count int) int {
	sum := 0
	for i := 0; i < loop_count; i++ {
		sum += i
	}
	return sum
}

func main() {
	js.Global().Set("goLoop", js.FuncOf(func(this js.Value, p []js.Value) interface{} {
		// this js.Valueはjsから呼ばれた際のjsのthisに相当らしい
		// p []js.Valueはjsから呼ばれた際の引数
		// interface{}はどんな値も文字できる表現。js.ValueOf()の返却をラッピング
		loop_count := p[0].Int()
		sum := goLoop(loop_count)
		return js.ValueOf(sum)
	}))
	// 無限ループ用(Goのwasm実装の慣例らしい)
	select {}
}

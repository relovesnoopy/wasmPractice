package main

import (
	"syscall/js"

	"github.com/microcosm-cc/bluemonday"
	"github.com/russross/blackfriday/v2"
)

func markdownToHTML(markdown string) string {
	renderer := blackfriday.NewHTMLRenderer(blackfriday.HTMLRendererParameters{
		Flags: blackfriday.HrefTargetBlank,
	})
	output := blackfriday.Run([]byte(markdown), blackfriday.WithExtensions(blackfriday.HardLineBreak+blackfriday.Autolink), blackfriday.WithRenderer(renderer))
	html := bluemonday.UGCPolicy().SanitizeBytes(output)
	return string(html)
}

func main() {
	//markdownToHTML関数をJSから呼べるように定義
	js.Global().Set("markdownToHTML", js.FuncOf(func(this js.Value, p []js.Value) interface{} {
		// this js.Valueはjsから呼ばれた際のjsのthisに相当らしい
		// p []js.Valueはjsから呼ばれた際の引数
		// interface{}はどんな値も文字できる表現。js.ValueOf()の返却をラッピング(stringでも可)
		markdown := p[0].String()
		html := markdownToHTML(markdown)
		return js.ValueOf(html)
	}))
	// 無限ループ用(Goのwasm実装の慣例らしい)
	select {}
}

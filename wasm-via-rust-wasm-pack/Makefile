FILES=pkg/hello_world.js pkg/hello_world_bg.wasm

.PHONY: run
run:	$(FILES)
	python3 -m http.server

$(FILES): build

.PHONY: build
build:
	wasm-pack build --target web

.PHONY: clean
clean:
	rm -rf pkg target

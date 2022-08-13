.PHONY: web
web:
	cargo install wasm-pack
	wasm-pack build --target web
	python3 -m http.server

.PHONY: npm
npm:
	wasm-pack build --target bundler
	cd pkg && npm link
	mkdir -p site && cd site && npm link hello-wasm
	cd site && npm install
	cd site && npm run serve

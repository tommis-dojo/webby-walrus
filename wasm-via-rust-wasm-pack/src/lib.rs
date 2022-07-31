// The wasm-pack uses wasm-bindgen to build and generate JavaScript binding file.
// Import the wasm-bindgen crate.
use wasm_bindgen::prelude::*;

// Our Add function
// wasm-pack requires "exported" functions
// to include #[wasm_bindgen]
#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b;
}

// Using a static mutable (global) variable only because we need a global state
// for webassembly
//
static mut VAL : i32 = 0;

#[wasm_bindgen]
pub fn set(value: i32) {
    unsafe { VAL = value; }
}

#[wasm_bindgen]
pub fn get() -> i32 {
    unsafe { VAL }
}

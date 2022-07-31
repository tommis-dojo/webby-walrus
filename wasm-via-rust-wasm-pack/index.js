// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/hello_world.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const wsm = await init("./pkg/hello_world_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = wsm.add(24, 24);

  // Read the result of a simple function
  document.getElementById("simple-get").textContent = `addResult: ${addResult}`;
  
  // Pressing "inc" will increment number and update the item
  document.getElementById("inc").onclick = function() {
    wsm.set(wsm.get() + 1);
    document.getElementById("inc-val").textContent = `get: ${wsm.get()}`;
  };
};
runWasm();

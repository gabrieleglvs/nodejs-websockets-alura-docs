import { atualizaTextoEditor } from "./documento.js";

const socket = io();

function emitirTextoEditor(textoEditorValue) {
  ////emitindo evento do front para o back
  socket.emit("texto_editor", textoEditorValue);
}

//capturando no front, evento que está sendo emitido no back
socket.on("texto_editor_clientes", (textoEditorValue) => {
  atualizaTextoEditor(textoEditorValue);
})

export { emitirTextoEditor }
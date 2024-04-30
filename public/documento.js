const socket = io();

const textoEditor = document.getElementById("editor-texto");

textoEditor.addEventListener("keyup", () => {
  ////emitindo evento do front para o back
  socket.emit("texto_editor", textoEditor.value);
})

//capturando no front, evento que está sendo emitido no back
socket.on("texto_editor_clientes", (textoEditorValue) => {
  textoEditor.value = textoEditorValue;
})
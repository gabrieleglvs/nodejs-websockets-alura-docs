import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  //capturando evento que está sendo emitido do front
  socket.on("texto_editor", (textoEditorValue) => {
    console.log(textoEditorValue);
  });
});
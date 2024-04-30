import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou! ID:", socket.id);

  //capturando no back evento que está sendo emitido do front
  socket.on("texto_editor", (textoEditorValue) => {
    //emitindo evento do back para o front
    //socket.broadcast > emite para todos os clientes menos p/ ele msm
    socket.broadcast.emit('texto_editor_clientes', textoEditorValue);
  });
});
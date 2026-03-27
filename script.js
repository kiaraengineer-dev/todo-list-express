
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const lista = document.getElementById("task-list");
const listaconfirmadas = document.getElementById("task-confirmed");

form.addEventListener("submit", function (Evento) {
  Evento.preventDefault();

 
  const tarefas = input.value;

  
  if (tarefas === " ") return;

  
  const li = document.createElement("li");

 
  const data = new Date().toLocaleDateString("pt-BR");

  
  li.textContent = `✅${tarefas} - ${data}`;

  const botaoexcluir = document.createElement("button");
  botaoexcluir.textContent = "❌";

  botaoexcluir.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(botaoexcluir);

 
  listaconfirmadas.appendChild(li);

  
  input.value = "";
});

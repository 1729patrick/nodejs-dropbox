submit2 = () => {
  const form = document.form2

  let nomes = [];
  for (let i = 0; i < form.length; i++) {
    if (form[i].value) {
      nomes = [...nomes, form[i].value]
    }
  }
  document.getElementsByClassName("nomes")[0].innerHTML = nomes.length ? `Nomes: ${nomes.reverse().join(", ")}` : "Valores inválidos"
}

addInput = () => {
  const { form } = document.forms
  const nextIndex = form.length + 1;

  const div = document.createElement("div");
  let label = document.createElement("Label");
  label.setAttribute("for", nextIndex);
  label.innerHTML = `Nome ${nextIndex}:`;
  label.className = 'label';
  label.style.display = 'block'

  let input = document.createElement('input')
  input.type = "text"
  input.name = nextIndex
  input.className = "input"
  input.placeholder = "Digite um nome"
  div.append(label)
  div.append(input)
  form.append(div)
}

const { form1, form2 } = document.forms

// QUESTAO 1
for (let i = 0; i < 10; i++) {
  const div = document.createElement("div");
  const label = document.createElement("Label");
  label.setAttribute("for", i);
  label.innerHTML = `Número ${i + 1}:`;
  label.className = 'label';

  let input = document.createElement('input')
  input.type = "number"
  input.name = i
  input.className = "input"
  input.placeholder = "Digite um número"
  div.append(label)
  div.append(input)
  form1.append(div)
}


// QUESTAO 2
for (let i = 0; i < 2; i++) {
  const div = document.createElement("div");
  const label = document.createElement("Label");
  label.setAttribute("for", i);
  label.innerHTML = `Nome ${i + 1}:`;
  label.className = 'label';

  let input = document.createElement('input')
  input.type = "text"
  input.name = i
  input.className = "input"
  input.placeholder = "Digite um nome"
  div.append(label)
  div.append(input)
  form2.append(div)
}

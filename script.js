let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#default-search");
let table = document.querySelector("#table");
inputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let tableOf = input.value;
  table.innerHTML = "";

  for (let i = 1; i <= 10; i++) {
    // const message = `${tableOf} X ${i} = ${tableOf * i}`;

    table.innerHTML += `    <tr class="border border-gray-400 ">
        <td class="border border-gray-400 px-4 py-2">${tableOf}</td>
        <td class="border border-gray-400 px-4 py-2">X</td>
        <td class="border border-gray-400 px-4 py-2">${i}</td>
        <td class="border border-gray-400 px-4 py-2">= </td>
        <td class="border border-gray-400 px-4 py-2">${tableOf * i}</td>
    </tr>`;
  }
  input.value = ""
});

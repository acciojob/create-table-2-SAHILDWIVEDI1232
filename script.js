
    //Write your code here
  function createTable() {
  // Get user input
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Parse to integers
  const rn = parseInt(rows);
  const cn = parseInt(cols);

  // Validate input
  if (isNaN(rn) || isNaN(cn)) return; // Ignore non-numeric input
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Get reference to the table
  const table = document.getElementById("myTable");

  // Clear existing content
  table.innerHTML = "";

  // Create table rows and cells
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}



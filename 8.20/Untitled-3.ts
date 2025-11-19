
                      
<script>
/**
 * Generic table sorter
 * @param {string} tbodyId - ID ng tbody (e.g., "westTableBody")
 * @param {string} rowClass - class ng row (e.g., "westRow")
 * @param {number} columnIndex - index ng column to sort
 * @param {string} type - "string" o "number"
 * @param {boolean} asc - ascending or descending
 */
function sortGenericTable(tbodyId, rowClass, columnIndex, type, asc) {
  const tbody = document.getElementById(tbodyId);
  const rowsArray = Array.from(tbody.querySelectorAll("." + rowClass));

  rowsArray.sort((a, b) => {
    let valA, valB;
    if(type === "string") {
      // For Name column or text
      valA = a.children[columnIndex].innerText.trim().toLowerCase();
      valB = b.children[columnIndex].innerText.trim().toLowerCase();
      if(valA < valB) return asc ? -1 : 1;
      if(valA > valB) return asc ? 1 : -1;
      return 0;
    } else if(type === "number") {
      // For Term Start / Term End
      valA = parseInt(a.children[columnIndex].innerText.trim(), 10);
      valB = parseInt(b.children[columnIndex].innerText.trim(), 10);
      return asc ? valA - valB : valB - valA;
    }
    return 0;
  });

  tbody.innerHTML = "";
  rowsArray.forEach(row => tbody.appendChild(row));
}

// Apply sorting to all tables
document.querySelectorAll("table").forEach(table => {
  const tbodyId = table.querySelector("tbody").id;
  const rowClass = table.querySelector("tbody tr").className;

  table.querySelectorAll("th.sortable").forEach((th, idx) => {
    th.addEventListener("click", () => {
      // Remove asc/desc from other headers
      table.querySelectorAll("th.sortable").forEach(header => {
        if(header !== th) header.classList.remove("asc", "desc");
      });

      // Toggle direction
      const asc = !th.classList.contains("asc");
      th.classList.toggle("asc", asc);
      th.classList.toggle("desc", !asc);

      // Sort table
      const type = th.dataset.type;
      sortGenericTable(tbodyId, rowClass, idx, type, asc);
    });
  });
});
</script>
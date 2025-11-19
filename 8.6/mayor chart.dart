<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<style>
  #imageModal {
    display: none;
    position: fixed;
    background: white;
    border: 2px solid #666;
    padding: 12px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 250px;
    border-radius: 6px;
  }

  #imageModal img {
    width: 100%;
    height: auto;
    display: block;
    margin-top: 10px;
  }
</style>

<div id="example2_1" style="height: 600px;"></div>
<div id="imageModal"></div>

<script type="text/javascript">
  google.charts.load("current", { packages: ["timeline"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const container = document.getElementById("example2_1");
    const chart = new google.visualization.Timeline(container);
    const dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: "string", id: "Term" });
    dataTable.addColumn({ type: "string", id: "Name" });
    dataTable.addColumn({ type: "date", id: "Start" });
    dataTable.addColumn({ type: "date", id: "End" });

    dataTable.addRows([
      ["1", "Mayor Cenon Traballo", new Date(1938, 0, 1), new Date(1941, 0, 2)],
  ["2", "Mayor Ricardo Rojas", new Date(1941, 0, 1), new Date(1943, 0, 2)],
  ["3", "Mayor Basilio Soriao", new Date(1943, 0, 1), new Date(1946, 0, 2)],
  ["4", "Mayor Moises Tarrobal", new Date(1946, 0, 1), new Date(1948, 0, 2)],
  ["5", "Mayor Anacleto Tejada", new Date(1948, 0, 1), new Date(1952, 0, 2)],
  ["6", "Mayor Anacleto Tejada", new Date(1952, 0, 1), new Date(1956, 0, 2)],
  ["7", "Mayor Amando Vergara", new Date(1956, 0, 1), new Date(1960, 0, 2)],
  ["8", "Mayor Amando Vergara", new Date(1960, 0, 1), new Date(1964, 0, 2)],
  ["9", "Mayor Gil Rojas", new Date(1964, 0, 1), new Date(1966, 0, 2)],
  ["10", "Mayor Adriano Tresvalles", new Date(1966, 0, 1), new Date(1968, 0, 2)],
  ["11", "Mayor Rosaleo Regalado", new Date(1968, 0, 1), new Date(1971, 0, 2)],
  ["12", "Mayor Floro Tresvalles", new Date(1971, 0, 1), new Date(1975, 0, 2)],
  ["13", "Mayor Floro Tresvalles", new Date(1975, 0, 1), new Date(1980, 0, 2)],
  ["14", "Pablo Molina", new Date(1980, 1, 4), new Date(1980, 3, 2)],
  ["15", "Mayor Andres Torres", new Date(1980, 3, 3), new Date(1986, 4, 30)],
  ["16", "Acting Mayor Ely T. Mendoza", new Date(1986, 5, 2), new Date(1986, 8, 20)],
  ["17", "Ely T. Mendoza", new Date(1987, 8, 21), new Date(1988, 11, 30)],
  ["18", "Dr. Loreto T. Rojas", new Date(1987, 12, 18), new Date(1988, 2, 2)],
  ["19", "Mayor Felicito T. Tasarra", new Date(1988, 2, 2), new Date(1992, 6, 30)],
  ["20", "Mayor Camilo R. Teope", new Date(1992, 6, 30), new Date(1998, 6, 30)],
  ["21", "Mayor Lorenzo T. Templonuevo, Jr.", new Date(1998, 6, 30), new Date(2004, 6, 30)],
  ["22", "Mayor Eulogio R. Rodriguez", new Date(2007, 6, 30), new Date(2013, 6, 30)],
  ["23", "Mayor Juan T. Rodulfo", new Date(2013, 6, 30), new Date(2016, 6, 30)],
  ["24", "Mayor Eulogio R. Rodriguez", new Date(2016, 6, 30), new Date(2019, 6, 30)],
  ["25", "Mayor Juan T. Rodulfo", new Date(2019, 6, 30), new Date(2025, 6, 30)],
  ["26", "Princess Vanessa Rodriguez", new Date(2025, 6, 30), new Date()]
    ]);

    chart.draw(dataTable);

    const modal = document.getElementById("imageModal");

    function getImageUrlForName(name) {
      const images = {
        "Mayor Juan T. Rodulfo": "https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Washington_by_Gilbert_Stuart%2C_1797.png",
        "Mayor Andres Torres": "https://upload.wikimedia.org/wikipedia/commons/2/25/John_Adams_White_House_portrait_1770-crop.jpg",
        "Mayor Amando Vergara": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Thomas_Jefferson_by_Rembrandt_Peale_1800.jpg",
        "Additional Person": "https://via.placeholder.com/150.png?text=No+Image"
      };
      return images[name] || "https://via.placeholder.com/150.png?text=No+Image";
    }

    // Show Modal on Hover
    google.visualization.events.addListener(chart, 'onmouseover', function (e) {
      if (e.row != null) {
        const name = dataTable.getValue(e.row, 1);
        const imageUrl = getImageUrlForName(name);

        const rect = container.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const containerLeft = rect.left + window.scrollX;

        // Approximate Y based on row height (calculate dynamically)
        const rowHeight = container.offsetHeight / dataTable.getNumberOfRows();
        let modalTop = containerTop + e.row * rowHeight;

        // Try to position modal to right of the chart
        let modalLeft = containerLeft + container.offsetWidth + 20;

        // If modal overflows screen width, move it to the left of chart
        const modalWidth = 250;
        if (modalLeft + modalWidth > window.innerWidth) {
          modalLeft = containerLeft - modalWidth - 20;
        }

        // If modal overflows bottom viewport, adjust upwards
        if (modalTop + 200 > window.innerHeight + window.scrollY) {
          modalTop = window.innerHeight + window.scrollY - 220;
        }

        // Set modal content and position
        modal.innerHTML = `<strong>${name}</strong><br><img src="${imageUrl}" alt="${name}"/>`;
        modal.style.left = modalLeft + "px";
        modal.style.top = modalTop + "px";
        modal.style.display = "block";
      }
    });

    // Hide modal on mouseout
    google.visualization.events.addListener(chart, 'onmouseout', function () {
      modal.style.display = "none";
    });
  }
</script>

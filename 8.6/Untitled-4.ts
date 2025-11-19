<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<style>
  #imageModal {
    display: none;
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  #imageModal img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }

  #imageModal .textContent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #imageModal .textContent .name {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }

  #imageModal .textContent .info {
    font-size: 12px;
    color: #333;
  }
</style>

<div id="example2_1" style="height: 500px;"></div>

<div id="imageModal">
  <img id="modalImage" src="" alt="">
  <div class="textContent">
    <div class="name" id="modalName"></div>
    <div class="info" id="modalInfo"></div>
  </div>
</div>

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
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<style>
  #imageModal {
    display: none;
    position: absolute;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;
    border-radius: 8px;
    font-family: Arial, sans-serif;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  #imageModal img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    flex-shrink: 0;
  }

  #imageModal .textContent {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  #imageModal .textContent .name {
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }

  #imageModal .textContent .info {
    font-size: 12px;
    color: #333;
  }
</style>

<div id="example2_1" style="height: 500px;"></div>

<div id="imageModal">
  <img id="modalImage" src="" alt="">
  <div class="textContent">
    <div class="name" id="modalName"></div>
    <div class="info" id="modalInfo"></div>
  </div>
</div>

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
  ["3", "Mayor Basilio Soriao (Appointed)", new Date(1943, 0, 1), new Date(1946, 0, 2)],
  ["4", "Mayor Moises Tarrobal (by Succession)", new Date(1946, 0, 1), new Date(1948, 0, 2)],
  ["5", "Mayor Anacleto Tejada, LP", new Date(1948, 0, 1), new Date(1952, 0, 2)],
  ["6", "Mayor Anacleto Tejada (Re-elected) LP", new Date(1952, 0, 1), new Date(1956, 0, 2)],
  ["7", "Mayor Amando Vergara, NP", new Date(1956, 0, 1), new Date(1960, 0, 2)],
  ["8", "Mayor Amando Vergara, (Re-elected) NP", new Date(1960, 0, 1), new Date(1964, 0, 2)],
  ["9", "Mayor Gil Rojas, LP", new Date(1964, 0, 1), new Date(1966, 0, 2)],
  ["10", "Mayor Adriano Tresvalles (by Succession)", new Date(1966, 0, 1), new Date(1968, 0, 2)],
  ["11", "Mayor Rosaleo Regalado, NP", new Date(1968, 0, 1), new Date(1971, 0, 2)],
  ["12", "Mayor Floro Tresvalles, NP", new Date(1971, 0, 1), new Date(1975, 0, 2)],
  ["13", "Mayor Floro Tresvalles, NP (Martial Law Extended)", new Date(1975, 0, 1), new Date(1980, 0, 2)],
  ["14", "Pablo Molina (Officer-in-Charge),NP", new Date(1980, 0, 1), new Date(1980, 0, 2)],
  ["15", "Mayor Andres Torres, KBL", new Date(1980, 0, 1), new Date(1986, 0, 2)],
  ["16", "Acting Mayor Ely T. Mendoza, UNIDO", new Date(1986, 0, 1), new Date(1986, 0, 2)],
  ["17", "Ely T. Mendoza (OIC Mayor)", new Date(1987, 0, 1), new Date(1988, 0, 2)],
  ["18", "Dr. Loreto T. Rojas (OIC Mayor)", new Date(1987, 0, 1), new Date(1988, 0, 2)],
  ["19", "Mayor Felicito T. Tasarra", new Date(1988, 0, 1), new Date(1992, 0, 2)],
  ["20", "Mayor Camilo R. Teope", new Date(1992, 0, 1), new Date(1998, 0, 2)],
  ["21", "Mayor Lorenzo T. Templonuevo, Jr.", new Date(1998, 0, 1), new Date(2004, 0, 2)],
  ["22", "Mayor Eulogio R. Rodriguez", new Date(2007, 0, 1), new Date(2013, 0, 2)],
  ["23", "Mayor Juan T. Rodulfo", new Date(2013, 0, 1), new Date(2016, 0, 2)],
  ["24", "Mayor Eulogio R. Rodriguez", new Date(2016, 0, 1), new Date(2019, 0, 2)],
  ["25", "Mayor Juan T. Rodulfo", new Date(2019, 0, 1), new Date(2025, 0, 2)],
  ["26", "Princess Vanessa Rodriguez", new Date(2025, 0, 1), new Date()]
]);

    // Disable Google's Default Tooltip
    chart.draw(dataTable, { tooltip: { trigger: 'none' } });

    const modal = document.getElementById("imageModal");
    const modalName = document.getElementById("modalName");
    const modalImage = document.getElementById("modalImage");
    const modalInfo = document.getElementById("modalInfo");

    const images = {
      "George Washington": "https://r2.erweima.ai/imgcompressed/img/compressed_1f3a4c924c1d42de338522ae272a9d6b.webp",
      "John Adams": "https://images.fineartamerica.com/images-medium-large/portrait-of-john-adams-gilbert-stuart.jpg",
      "Thomas Jefferson": "https://cdn.britannica.com/19/175519-050-7F5F3C78/Thomas-Jefferson-oil-canvas-Charles-Willson-Peale.jpg",
      "Additional Person": "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-person-gray-photo-placeholder-man-132818487.jpg"
    };

    const additionalInfo = {
      "Mayor Camilo R. Teope": "Elected Mayor May 11, 1992 | Re-elected Mayor May 9, 1995",
      "Mayor Lorenzo T. Templonuevo, Jr.": "Elected Mayor May 11, 1998 | Re-elected Mayor May 14, 2001 | Re-elected Mayor May 10, 2004",
      "Mayor Eulogio R. Rodriguez": "Elected Mayor May 14, 2007 | Re-elected Mayor May 10, 2010",
    };

    google.visualization.events.addListener(chart, 'onmouseover', function (e) {
      if (e.row != null) {
        const name = dataTable.getValue(e.row, 1);
        modalName.textContent = name;
        modalImage.src = images[name] || images["Additional Person"];
        modalImage.alt = name;
        modalInfo.textContent = additionalInfo[name] || "";

        modal.style.display = "flex";
        document.body.addEventListener("mousemove", onMouseMove);
      }
    });

    google.visualization.events.addListener(chart, 'onmouseout', function () {
      modal.style.display = "none";
      document.body.removeEventListener("mousemove", onMouseMove);
    });

    function onMouseMove(event) {
      const offsetX = 20;
      const offsetY = 20;
      modal.style.left = (event.pageX + offsetX) + "px";
      modal.style.top = (event.pageY + offsetY) + "px";
    }
  }
</script>
]);

    // Disable Google's Default Tooltip
    chart.draw(dataTable, { tooltip: { trigger: 'none' } });

    const modal = document.getElementById("imageModal");
    const modalName = document.getElementById("modalName");
    const modalImage = document.getElementById("modalImage");
    const modalInfo = document.getElementById("modalInfo");

    const images = {
      "George Washington": "https://r2.erweima.ai/imgcompressed/img/compressed_1f3a4c924c1d42de338522ae272a9d6b.webp",
      "John Adams": "https://images.fineartamerica.com/images-medium-large/portrait-of-john-adams-gilbert-stuart.jpg",
      "Thomas Jefferson": "https://cdn.britannica.com/19/175519-050-7F5F3C78/Thomas-Jefferson-oil-canvas-Charles-Willson-Peale.jpg",
      "Additional Person": "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-person-gray-photo-placeholder-man-132818487.jpg"
    };

    const additionalInfo = {
      "George Washington": "1st President of the United States (1789–1797).",
      "John Adams": "2nd President of the United States (1797–1801).",
      "Thomas Jefferson": "3rd President of the United States (1801–1809).",
      "Additional Person": "This is a placeholder person for demo purposes."
    };

    google.visualization.events.addListener(chart, 'onmouseover', function (e) {
      if (e.row != null) {
        const name = dataTable.getValue(e.row, 1);
        modalName.textContent = name;
        modalImage.src = images[name] || images["Additional Person"];
        modalImage.alt = name;
        modalInfo.textContent = additionalInfo[name] || "";

        modal.style.display = "flex";
        document.body.addEventListener("mousemove", onMouseMove);
      }
    });

    google.visualization.events.addListener(chart, 'onmouseout', function () {
      modal.style.display = "none";
      document.body.removeEventListener("mousemove", onMouseMove);
    });

    function onMouseMove(event) {
      const offsetX = 20;
      const offsetY = 20;
      modal.style.left = (event.pageX + offsetX) + "px";
      modal.style.top = (event.pageY + offsetY) + "px";
    }
  }
</script>
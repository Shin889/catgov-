<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<style>
  /* Modal style */
  #imageModal {
    display: none; /* Hidden by default */
    position: absolute;
    background: white;
    border: 2px solid #666;
    padding: 10px;
    z-index: 1000;
    box-shadow: 0 0 10px #999;
    max-width: 200px;
  }
  #imageModal img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>

<div id="example2.1" style="height: 500px;"></div>

<!-- Modal div that will show image -->
<div id="imageModal"></div>

<script type="text/javascript">
  google.charts.load("current", { packages: ["timeline"] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var container = document.getElementById("example2.1");
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: "string", id: "Term" });
    dataTable.addColumn({ type: "string", id: "Name" });
    dataTable.addColumn({ type: "date", id: "Start" });
    dataTable.addColumn({ type: "date", id: "End" });

    dataTable.addRows([
      ["1", "George Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
      ["2", "John Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
      ["3", "Thomas Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
      ["4", "Additional Person", new Date(1892, 2, 4), new Date(1908, 2, 4)]
    ]);

    chart.draw(dataTable);

    // Get reference to modal div
    var modal = document.getElementById("imageModal");

    // Helper to map names to image URLs
    function getImageUrlForName(name) {
      var images = {
        "George Washington": "https://upload.wikimedia.org/wikipedia/commons/6/6f/George_Washington_by_Gilbert_Stuart%2C_1797.png",
        "John Adams": "https://upload.wikimedia.org/wikipedia/commons/2/25/John_Adams_White_House_portrait_1770-crop.jpg",
        "Thomas Jefferson": "https://upload.wikimedia.org/wikipedia/commons/1/1e/Thomas_Jefferson_by_Rembrandt_Peale_1800.jpg",
        "Additional Person": "https://via.placeholder.com/150.png?text=No+Image"
      };
      return images[name] || "https://via.placeholder.com/150.png?text=No+Image";
    }

    // Add mouseover listener to show modal with image
    google.visualization.events.addListener(chart, 'onmouseover', function (e) {
      if (e.row != null) {
        var name = dataTable.getValue(e.row, 1);
        var imageUrl = getImageUrlForName(name);

        // Position the modal near cursor with some offset
        // Use event.pageX/Y if available, but Google Charts 'onmouseover' event does not provide exact mouse coords
        // So instead, position near container top-left + offsets to keep modal visible

        var rect = container.getBoundingClientRect();
        var modalLeft = rect.left + 10;
        var modalTop = rect.top + 10 + e.row * 50; // approx vertical position for row

        // Set modal content
        modal.innerHTML = `<strong>${name}</strong><br><img src="${imageUrl}" alt="${name}"/>`;
        modal.style.left = modalLeft + "px";
        modal.style.top = modalTop + "px";
        modal.style.display = "block";
      }
    });

    // Hide modal on mouseout
    google.visualization.events.addListener(chart, 'onmouseout', function (e) {
      modal.style.display = "none";
    });
  }
</script>

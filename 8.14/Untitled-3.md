<style>
.file-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 40px 20px;
  background-color: #0066cc;
}

.file-item {
  background: #0066cc;
  border-radius: 6px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
  overflow: hidden;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: background 0.2s ease;
}

.file-item:hover {
  background: #005bb5;
}

.file-header {
  padding: 15px;
  font-weight: bold;
  text-align: center;
  color: white;
  text-decoration: underline;
}

/* Certificate section */
.certificate-grid {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 20px;
  background: linear-gradient(to bottom, #f3e9f2, #ffffff);
}

.certificate-item {
  text-align: center;
  max-width: 250px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.certificate-item:hover {
  transform: scale(1.05);
}

.certificate-item img {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.certificate-caption {
  margin-top: 5px;
  font-size: 0.9rem;
  color: #b88a00;
  font-weight: bold;
  text-decoration: underline;
}

.location-section {
  background-color: #0066cc;
  color: white;
  text-align: center;
  padding: 20px 20px;
}

.location-section h2 {
  margin-bottom: 10px;
  color: white;
}

.location-section p {
  margin: 0;
  font-size: 1rem;
}

.location-section span {
  color: red;
  font-size: 1.2rem;
}

/* Modal Styles */
.modal {
  display: none; 
  position: fixed;
  z-index: 9999;
  padding-top: 60px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.8);
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
}

.modal-caption {
  margin: 15px auto;
  text-align: center;
  color: white;
  font-size: 1.2rem;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
}
</style>

<div class="file-grid">
  <div class="file-item" data-url="http://wp-local.com/wp-content/uploads/2025/08/preamble-1-1.pdf">
    <div class="file-header">AMENDED CONSTITUTION AND BY-LAWS</div>
  </div>

  <div class="file-item" data-url="https://docs.google.com/document/d/1p4iD-weYXhcap5i7TRiJKpqTugpw6MBoEvp-WpsIk3A/preview">
    <div class="file-header">COLLECTIVE NEGOTIATION AGREEMENT</div>
  </div>
</div>

<!-- Certificates Section -->
<div class="certificate-grid">
  <div class="certificate-item" data-img="http://wp-local.com/wp-content/uploads/2025/08/COA_n-1.jpg" data-caption="Certificate of Registration">
    <img src="http://wp-local.com/wp-content/uploads/2025/08/COA_n-1.jpg" alt="Certificate 1">
    <div class="certificate-caption">Certificate of Registration</div>
  </div>

  <div class="certificate-item" data-img="http://wp-local.com/wp-content/uploads/2025/08/Certificate_n-1.jpg" data-caption="Certificate of Registration">
    <img src="http://wp-local.com/wp-content/uploads/2025/08/Certificate_n-1.jpg" alt="Certificate 2">
    <div class="certificate-caption">Certificate of Registration</div>
  </div>

  <div class="certificate-item" data-img="http://wp-local.com/wp-content/uploads/2025/08/473569739_622412160274304_1000689601338058294_n-1.jpg" data-caption="Certificate of Appreciation">
    <img src="http://wp-local.com/wp-content/uploads/2025/08/473569739_622412160274304_1000689601338058294_n-1.jpg" alt="Certificate 3">
    <div class="certificate-caption">Certificate of Appreciation</div>
  </div>

  <div class="certificate-item" data-img="http://wp-local.com/wp-content/uploads/2025/08/480673922_644626284719558_1339096649384436446_n-1.jpg" data-caption="Certificate of Appreciation">
    <img src="http://wp-local.com/wp-content/uploads/2025/08/480673922_644626284719558_1339096649384436446_n-1.jpg" alt="Certificate 4">
    <div class="certificate-caption">Certificate of Appreciation</div>
  </div>
</div>

<!-- Location Section -->
<div class="location-section">
  <h2>Where we are today.</h2>
  <p><span>📍</span> Ground Floor, Provincial Capitol Building, Virac, Catanduanes</p>
</div>

<!-- Modal -->
<div id="imgModal" class="modal">
  <span class="modal-close">&times;</span>
  <img class="modal-content" id="modalImage">
  <div class="modal-caption" id="modalCaption"></div>
</div>

<script>
document.querySelectorAll('.file-item').forEach(item => {
  item.addEventListener('click', () => {
    const url = item.getAttribute('data-url');
    if (url) {
      window.open(url, '_blank');
    }
  });
});

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll('.certificate-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('data-img');
    const captionText = item.getAttribute('data-caption');
    modal.style.display = "block";
    modalImg.src = imgSrc;
    modalCaption.textContent = captionText;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
</script>
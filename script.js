console.log("ConsentGuard script running");

// Get HTML elements
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const shareButtons = document.getElementById('shareButtons');

// Upload button click
uploadBtn.addEventListener('click', () => {
  const file = fileInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("Only images are allowed for now.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    const img = new Image();

    img.onload = function() {
      // Clear previous canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Scale image if too wide
      const maxWidth = 600;
      let scale = 1;
      if (img.width > maxWidth) scale = maxWidth / img.width;

      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Add watermark
      ctx.font = "25px Arial";
      ctx.fillStyle = "rgba(255,0,0,0.5)";
      ctx.fillText("Confidential - Bianca", 20, 40);

      // Show share buttons
      shareButtons.style.display = "block";

      // Reset file input so same file can be reselected
      fileInput.value = "";
    };

    img.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

// Share to WhatsApp
function shareWhatsApp() {
  const link = canvas.toDataURL('image/png');
  const waUrl = `https://wa.me/?text=${encodeURIComponent("Check this content: " + link)}`;
  window.open(waUrl, '_blank');
}

// Share to Facebook
function shareFacebook() {
  const link = canvas.toDataURL('image/png');
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`;
  window.open(fbUrl, '_blank');
}

// Share to TikTok (manual for now)
function shareTikTok() {
  alert("TikTok sharing requires manual upload for now.");
}
document.addEventListener("DOMContentLoaded", function () {
  const alertBox = document.createElement("div");
  alertBox.id = "site-alert";
  alertBox.style.display = "flex";
  alertBox.style.alignItems = "center";
  alertBox.style.justifyContent = "space-between";
  alertBox.style.padding = "10px 8px";
  alertBox.style.backgroundColor = "rgb(20 69 123 / 83%)";
  alertBox.style.color = "#856404";
  alertBox.style.fontSize = "16px";
  alertBox.style.fontFamily = "Arial, sans-serif";
  alertBox.style.position = "fixed";
  alertBox.style.top = "0";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translateX(-50%)";
  alertBox.style.width = "60%";
  alertBox.style.zIndex = "9999";
  alertBox.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

  alertBox.innerHTML = `
    <div style="display: flex; align-items: center; font-size: 1.1rem; color: white;">
      <img src="images/cons-l.jpg" alt="Update Icon" style="width: 5rem; height: 5rem; margin-right: 12px;">
      <span>
        <strong>Heads up!</strong> Our website is currently being updated. You can still contact us using the form below.
      </span>
    </div>
    <span style=" padding-right:20px; cursor: pointer; color:red; font-weight: bold; font-size: 3.3rem;" onclick="this.parentElement.style.display='none';">✖</span>
  `;

  document.body.prepend(alertBox);
});






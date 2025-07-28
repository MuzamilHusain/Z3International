document.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 600;
  const alertBox = document.createElement("div");
  alertBox.id = "site-alert";

  // Common styles for both versions
  Object.assign(alertBox.style, {
    opacity: "0",
    transform: "translateX(-50%) translateY(-100%)",
    transition: "all 0.6s ease",
    position: "fixed",
    top: "0",
    left: "50%",
    zIndex: "9999"
  });

  if (!isMobile) {
    // ✅ DESKTOP VERSION — Your original unchanged
    Object.assign(alertBox.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 8px",
      backgroundColor: "rgb(20 69 123 / 83%)",
      color: "#856404",
      fontSize: "16px",
      fontFamily: "Arial, sans-serif",
      width: "60%",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    });

    alertBox.innerHTML = `
      <div style="display: flex; align-items: center; font-size: 1.1rem; color: white;">
        <img src="./Images/cons-l.jpg" alt="Update Icon" style="width: 5rem; height: 5rem; margin-right: 12px;">
        <span>
          <strong>Heads up!</strong> Our website is currently being updated. You can still contact us using the form below.
        </span>
      </div>
      <span style="padding-right:20px; cursor: pointer; color:red; font-weight: bold; font-size: 3.3rem;" onclick="this.parentElement.style.display='none';">✖</span>
    `;
  } else {
    // ✅ MOBILE VERSION — Compact version
    Object.assign(alertBox.style, {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "10px",
      backgroundColor: "rgb(20 69 123 / 83%)",
      color: "white",
      fontSize: "0.9rem",
      fontFamily: "Arial, sans-serif",
      width: "90%",
      maxWidth: "800px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      borderRadius: "6px"
    });

    alertBox.innerHTML = `
      <span style="position: absolute; top: 2px; right: 5px; font-size: 1.2rem; font-weight: bold; color: rgb(238, 4, 4); cursor: pointer;" onclick="this.parentElement.style.display='none';">✖</span>
      <img src="/Images/cons-l.jpg" alt="Update Icon" style="width: 2.2rem; height: 2.2rem; margin-right: 10px; flex-shrink: 0;" />
      <span style="flex: 1;"> Our website is currently being updated. You can still contact us using the form below.</span>
    `;
  }

  document.body.prepend(alertBox);

  // Animate in
  setTimeout(() => {
    alertBox.style.opacity = "1";
    alertBox.style.transform = "translateX(-50%) translateY(0)";
  }, 50);
});

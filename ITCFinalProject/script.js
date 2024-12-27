function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }
  
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }

  function toggleContent(button) {
    const moreContent = button.previousElementSibling;
    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "inline";
        button.textContent = "close";
    } else {
        moreContent.style.display = "none";
        button.textContent = "Read More";
    }
}

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name === "" || email === "" || message === "") {
    alert("All fields must be filled out.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}


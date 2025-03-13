const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

fetch("navBar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading navigation:", error));


fetch("footer.html")
        .then(response => response.text())
        .then(footerdata => {
            document.getElementById("footer-placeholder").innerHTML = footerdata;
        })
        .catch(error => console.error("Error loading navigation:", error));







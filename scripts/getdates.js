// Wait until DOM is loaded if needed, but defer handles this.
document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearSpan = document.getElementById("currentyear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModParagraph = document.getElementById("lastModified");
    lastModParagraph.textContent = `Last Modified: ${document.lastModified}`;
});
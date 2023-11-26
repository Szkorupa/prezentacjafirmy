
function showSection(sectionName) {
    const sections = document.querySelectorAll('.orchestra-content');

    // Ukryj wszystkie sekcje
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Pokaż wybraną sekcję
    const selectedSection = document.getElementById(sectionName);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}
"use strict";
// Function to toggle the visibility of the Skills section
const toggleSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            console.log("Display block");
        }
        else {
            skillsSection.style.display = 'none';
        }
    }
};
// Event listener for the toggle button
const toggleButton = document.getElementById('toggle-skills');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleSkills);
}

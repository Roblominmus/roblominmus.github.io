
function goBack() {
  history.back();
}

document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.back-btn');
  if (backButton) {
    backButton.addEventListener('click', goBack);
  }
  // Theme toggling is handled centrally by assets/theme.js
});

const selects = document.querySelectorAll('select');

selects.forEach((select) => {
  select.addEventListener('change', (event) => {
    const selectedOption = event.target.value;

    selects.forEach((otherSelect) => {
      if (otherSelect !== select) {
        otherSelect.disabled = selectedOption !== '';
      }
    });
  });
});
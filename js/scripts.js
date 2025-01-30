document.querySelectorAll('.dropdown').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.querySelector('.dropdown-content').style.display = 'block';
  });
  item.addEventListener('mouseout', () => {
    item.querySelector('.dropdown-content').style.display = 'none';
  });
});

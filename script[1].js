document.getElementById('search').addEventListener('input', function() {
  let term = this.value.toLowerCase();
  document.querySelectorAll('.product').forEach(product => {
    let name = product.querySelector('h3').textContent.toLowerCase();
    product.style.display = name.includes(term) ? 'block' : 'none';
  });
});

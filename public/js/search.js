const formSubmit = async (e) => {
  e.preventDefault();
  const brand = document.querySelector('#brand').value.trim();
  const name = document.querySelector('#name').value.trim();
  const year = document.querySelector('#releaseYear').value.trim();

  if (!brand && !name && !year) {
    confirm("Please fill out all fields!")
  } else if (brand && name && year) {
    // Product.increment('count', { by: 1, where: { brand: brand, name: name, year: year }})
    const response = await fetch('api/product/', {
      method: 'POST',
      body: JSON.stringify({brand, name, year}),
      headers: {'Content-Type': 'application/json'}
    })

  if (!response.ok) {
    alert(response.statusText)
  }

  const userInfo = {brand, name, year}
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = ('/review')
  }
}



document
.querySelector('.search')
.addEventListener('submit', formSubmit);

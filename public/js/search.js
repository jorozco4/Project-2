const formSubmit = async (e) => {
  e.preventDefault();
  const brand = document.querySelector("#brand").value.trim();
  const name = document.querySelector("#name").value.trim();
  const year = document.querySelector("#releaseYear").value.trim();

  const userInfo = { brand, name, year };
  localStorage.setItem("userInfo", JSON.stringify(userInfo));

  if (!brand && !name && !year) {
    confirm("Please fill out all fields!");
  } else if (brand && name && year) {
    // Product.increment('count', { by: 1, where: { brand: brand, name: name, year: year }})
    const response = await fetch("api/product/", {
      method: "POST",
      body: JSON.stringify({ brand, name, year }),
      headers: { "Content-Type": "application/json" },
    });

    const resJson = await response.json();

    if (response.ok) {
      window.location.href = "/product/" + resJson.id;
    } else if (!response.ok) {
      const newAdd = await fetch("api/product/new", {
        method: "POST",
        body: JSON.stringify({ brand, name, year }),
        headers: { "Content-Type": "application/json" }
    });
    
    if (newAdd) {
      const res = await fetch("api/product/", {
              method: "POST",
              body: JSON.stringify({ brand, name, year }),
              headers: { "Content-Type": "application/json" },
            })
    
    const newResJson = await res.json()
    
    if (res.ok) {
    window.location.href = "/product/" + newResJson.id;    
    } else {
    alert(res.statusText)
    }
    }
    }

  }
};


document.querySelector(".search").addEventListener("submit", formSubmit);

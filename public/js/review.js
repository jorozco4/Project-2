function renderSneakers() {
  const img = document.createElement("img");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  fetch(
    `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&name=${userInfo.name}&releaseYear=${userInfo.year}&brand=${userInfo.brand}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "d838877240msh4581997fdf08b6ap14f151jsnaf1bcef3ad7c",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      img.src = data.results[0].media.smallImageUrl;
      $("#shoe-img").append(img);
      $("#shoe-name").html(data.results[0].shoe);
      $("#relDate").html("Release Date: " + data.results[0].releaseDate);
      $("#retailPrice").html("Current Cost: $" + data.results[0].retailPrice);
      $("#styleID").html("Style ID: " + data.results[0].styleId);
    })
    .catch((err) => {
      console.error(err);
    });
}
renderSneakers();


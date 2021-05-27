const userInfo = JSON.parse(localStorage.getItem("userInfo"));

const formSubmitBtn = $("#form-submit");

const reviewFormSubmitBtn = $("#review-submit");

const postReview = async (e) => {
  console.log(e);
  e.preventDefault();
  const reviewBody = {
    review_title: $("#review_button").val(),
    review: $("#review").val(),
    user_id: 1,
  };
  await fetch("http://localhost:3001/api/review", {
    method: "POST",
    body: JSON.stringify(reviewBody),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

reviewFormSubmitBtn.click((e) => {
  return postReview(e);
});

formSubmitBtn.click((e) => {
  e.preventDefault();
  if (
    $("#brand").val() == "" ||
    $("#name").val() == "" ||
    $("#releaseYear").val() == ""
  ) {
    confirm("Please fill out all fields!");
  } else {
    const userInfo = {
      brand: $("#brand").val(),
      name: $("#name").val(),
      relYear: $("#releaseYear").val(),
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    window.location.href = "./review.html";
  }
});

//   `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&name=${userInfo.name}&releaseYear=${userInfo.relYear}&brand=${userInfo.brand}`

function renderSneakers() {
  const img = document.createElement("img");

  fetch(
    `https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=10&name=${userInfo.name}&releaseYear=${userInfo.relYear}&brand=${userInfo.brand}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0c1a9a5c52msh230a7f2d99ccc15p10ad0djsn27e4137a93bc",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      console.log(data.results[0].media.smallImageUrl);
      img.src = data.results[0].media.smallImageUrl;
      console.log(img.src);
      $("#shoe-img").append(img);
      $("#shoe-name").html(data.results[0].shoe);
      $("#relDate").html("Release Date: " + data.results[0].releaseDate);
      $("#retailPrice").html("Current Costs: $" + data.results[0].retailPrice);
      $("#styleID").html("Style ID: " + data.results[0].styleId);
    })
    .catch((err) => {
      console.error(err);
    });
}

renderSneakers();

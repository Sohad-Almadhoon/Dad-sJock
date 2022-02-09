const joke = document.querySelector(".joke");
const jokeButton = document.querySelector("#jokeBtn");
jokeButton.addEventListener('click', function () {
    fetch(
        "https://icanhazdadjoke.com/?fbclid=IwAR1x20rYAYzSKJA37l0ABU2IJeoH9BCk-tjHq5QSbSb16ZZ5ARGqLmtlaQE",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
        .then((response) => response.json())
          .then((data) => {
              joke.innerHTML = [data][0].joke;
          });
})

let searchBtn = document.querySelector(".bi-search");
    let closeBtn = document.querySelector(".bi-x-lg");
    let searchBox = document.querySelector(".search-box");
    let navigation = document.querySelector(".navigation");
    let toggleBtn = document.querySelector(".bi-list");

    searchBtn.onclick = () => {
      searchBox.classList.add("active");
      searchBtn.classList.add("hide");
      closeBtn.classList.remove("hide");
      toggleBtn.classList.add("hide");
    };

    closeBtn.onclick = () => {
      searchBox.classList.remove("active");
      searchBtn.classList.remove("hide");
      closeBtn.classList.add("hide");
      toggleBtn.classList.remove("hide");
    };

    toggleBtn.onclick = () => {
      navigation.classList.toggle("open");
    };
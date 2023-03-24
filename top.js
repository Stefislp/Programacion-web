const mybutton = document.querySelector("#btn_scrolltop");

let lineaProgreso = document.querySelectorAll(".linea-progreso"),
valorProgreso = document.querySelectorAll(".valor-progreso");

for (let i = 0; i < lineaProgreso.length; i++) {
  progress_function(valorProgreso[i]);
}

mybutton.addEventListener('click', topFunction);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function progress_function(pv) {
  let progress_star_value = 0,
    speed = 40;

  let progress_end_value = parseInt(pv.textContent);

  let progress = setInterval(() => {
    progress_star_value++;
    pv.textContent = `${progress_star_value}%`;
    pv.style.width = progress_star_value + "%";

    if (progress_star_value === progress_end_value) {
      clearInterval(progress);
    }
  }, speed);
}

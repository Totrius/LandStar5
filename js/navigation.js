const app = {};

app.views = {
  main_menu: "/parts/mainMenu.html",
  forms: {
    measure: "/parts/formMeasure.html",
    addPoint: "/parts/formAddPoint.html",
  },
};

app.loadView = function (view) {
  fetch(view)
    .then(response => {
      if (!response.ok) {
        const err = new Error("Not 2xx response");
        err.response = response;
        throw err;
      }
      return response;
    })
    .then(response => response.text())
    .then(body => {
      app.frame_target.innerHTML = body;
    })
    .catch(err => {
      console.log("ojojoj");
      console.log(err, err.response);
    })
}

app.onLoad = function () {
  app.frame_target = document.getElementById("main_frame");
  app.loadView(app.views.main_menu)
}

app.onClick = function (event) {
  console.log(event.target);
}

document.addEventListener("DOMContentLoaded", app.onLoad);
document.addEventListener('click', app.onClick);

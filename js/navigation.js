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
  switch (event.target.id) {
    case "mm_wpisz":
      app.loadView(app.views.forms.addPoint);
      break;
    case "app_wyjdz":
      app.loadView(app.views.main_menu);
    break;
    case "app_navbar":
      app.loadView(app.views.main_menu);
    break;
    case "mm_pomiar":
      app.loadView(app.views.forms.measure);
    break;
  
    default:
      break;
  }
}



document.addEventListener("DOMContentLoaded", app.onLoad);
document.addEventListener('click', app.onClick);

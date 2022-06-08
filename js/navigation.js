const app = {
  modules: [],
  activeModules: [],
  frame_target: undefined,
  path: undefined,
  points: [
    { name: "Baranek Boży", code: "BAR1", x: -40, y: 7, h: 13 },
    { name: "Zbrodniarz", code: "JP2", x: 21, y: 37, h: 69 },
    { name: "Tadzio Kanalarz", code: "TK3", x: 164, y: -78, h: -7 },
  ],
  views: {
    main_menu: "/parts/mainMenu.html",
    cogo: "/parts/formCOGO.html",
    forms: {
      measure: "/parts/formMeasure.html",
      addPoint: "/parts/formAddPoint.html",
      files: "/parts/formFiles.html",
      info: "/parts/formInfo.html"
    },
  }
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
      let module;
      if (app.path) {
        module = app.activeModules.find(mod => mod.path === app.path);
        if (module !== undefined) {
          module.onUnload();
          app.activeModules = app.activeModules.filter(mod => mod.name !== module.name);
        }
      }

      app.frame_target.innerHTML = body;
      app.path = view;

      module = app.modules.find(mod => mod.path === app.path);
      if (module !== undefined) {
        module.onLoad();
        app.activeModules.push(module);
      }
    })
    .catch(err => {
      console.log("ojojoj");
      console.log(err, err.response);
    })
}

app.registerModule = function (module) {
  app.modules.push(module);
}

app.onLoad = function () {
  app.frame_target = document.getElementById("main_frame");

  app.loadView(app.views.main_menu)

  app.modules
    .filter(mod => mod.path === undefined)
    .forEach(mod => {
      app.activeModules.push(mod);
      mod.onLoad();
    });
}

app.onClick = function (event) {
  app.activeModules.forEach(mod => mod.onClick(event.target.id));

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
    case "mm_cogo":
      app.loadView(app.views.cogo);
      break;
    case "mm_pliki":
      app.loadView(app.views.forms.files);
    case "app_submit":
      app.loadView(app.views.main_menu);
      break;
    case "mm_info":
      app.loadView(app.views.forms.info);
      break;

    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", app.onLoad);
document.addEventListener('click', app.onClick);

app.registerModule({
  name: "measure",
  path: app.views.forms.measure,
  onLoad() { },
  onUnload() { },
  onClick(id) {
    switch (id) {
      case "app_submit":
        const ID1 = document.getElementById("meas_ID1").value;
        const ID2 = document.getElementById("meas_ID2").value;
        let found = 0;
        const points = [];

        for (let i = 0; i < app.points.length; i++) {
          if (ID1 == app.points[i].code) {
            points[0] = app.points[i];
            found++;

          } else if (ID2 == app.points[i].code) {
            points[1] = app.points[i];
            found++;
          }
        }

        if (found != 2) {
          alert("Nie znaleziono punktów!")
        } else {

          app.points_to_draw = points;
          return app.loadView(app.views.measure);
        }
    }
  },
});

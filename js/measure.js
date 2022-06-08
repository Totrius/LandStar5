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

        for (let i = 0; i < app.points.length; i++) {
          if (ID1 == app.points[i].code) {
            app.points_to_draw[0] = app.points[i]
          } else if (ID2 == app.points[i].code) {
            app.points_to_draw[1] = app.points[i]
          }
        }

        return app.loadView(app.views.measure);
    }
  },
});

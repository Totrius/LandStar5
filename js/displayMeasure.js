app.registerModule({
  name: "displayMeasure",
  path: app.views.measure,
  onLoad() {
    this.canvas = document.getElementById("dm_canvas")
    this.ctx = this.canvas.getContext("2d");

    this.rysujLinie();
  },
  onUnload() { },
  onClick(id) {
    switch (id) {
      case "app_submit":
        return app.loadView(app.views.main_menu);
    }
  },
  rysujLinie() {
    let [x1, y1] = [app.points_to_draw[0].x, app.points_to_draw[0].y];
    let [x2, y2] = [app.points_to_draw[1].x, app.points_to_draw[1].y];

    x1 = (x1 + 180) * this.canvas.width / 360;
    y1 = (y1 + 90) * this.canvas.height / 180;
    x2 = (x2 + 180) * this.canvas.width / 360;
    y2 = (y2 + 90) * this.canvas.height / 180;

    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }
});


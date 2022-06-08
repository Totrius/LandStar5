// hint: include navigation.js
app.registerModule({
  name: "displayPoints",
  path: app.views.map,
  onLoad() {
    this.canvas = document.getElementById("dp_canvas")
    this.ctx = this.canvas.getContext("2d");

    this.rysowanieZBazy();
    this.rysujLinie();
  },
  onUnload() { },
  onClick(id) {
    switch (id) {
      case "app_submit":
        return app.loadView(app.views.main_menu);
    }
  },
  rysowanieZBazy() {
    let x, y;
    for (let i = 0; i < app.points.length; i++) {
      x = app.points[i].x;
      x = (x + 180) * this.canvas.width / 360;
      y = app.points[i].y;
      y = (y + 90) * this.canvas.height / 180;

      this.ctx.beginPath();
      this.ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
});


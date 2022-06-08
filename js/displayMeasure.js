app.registerModule({
  name: "displayMeasure",
  path: app.views.measure,
  onLoad() {
    this.canvas = document.getElementById("dm_canvas")
    this.ctx = this.canvas.getContext("2d");

    this.rysujLinie();
    this.aktualizujWynik();
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
  },
  aktualizujWynik() {
    const [p1, p2] = app.points_to_draw;

    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const dh = p2.h - p1.h;

    const dist_2d = Math.sqrt(dx * dx + dy * dy);
    const dist_3d = Math.sqrt(dx * dx + dy * dy + dh * dh);

    const output = document.getElementById('app_output');
    output.innerText = `Wynik ostatniego pomiaru:
    Odległość na płaszczyźnie: ${this.roundTo(dist_2d, 4)}m
    Odległość przestrzenna: ${this.roundTo(dist_3d, 4)}m
    `
  },
  roundTo(num, prec) {
    return Math.round(num * Math.pow(10, prec)) / Math.pow(10, prec);
  }
});


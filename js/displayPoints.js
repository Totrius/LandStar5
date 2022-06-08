// hint: include navigation.js
app.registerModule({
  name: "displayPoints",
  path: app.views.map,
  submitText: "ok",
  toolbar: undefined,
  onLoad() {
    this.canvas = document.getElementById("dp_canvas")
    this.ctx = this.canvas.getContext("2d");

    this.rysowanieZBazy();
    this.rysujLinie();

  },
  onUnload() {

  },
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

  },
  rysujLinie(){
    const ID1 = document.getElementById("meas_ID1").value;
    const ID2 = document.getElementById("meas_ID2").value;;
    let x1, x2, y1, y2;
    for (let i = 0; i < app.points.length; i++) {
      if (ID1 == app.points[i].code){
        x1 = app.points[i].x;
        x1 = (x1 + 180) * this.canvas.width / 360;
        y1 = app.points[i].y;
        y1 = (y1 + 90) * this.canvas.height / 180;
      } else if (ID2 == app.points[i].code){
        x2 = app.points[i].x;
        x2 = (x2 + 180) * this.canvas.width / 360;
        y2 = app.points[i].y;
        y2 = (y2 + 90) * this.canvas.height / 180;
      }
    }
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
  }

});


// hint: include navigation.js
app.registerModule({
  name: "displayPoints",
  path: app.views.map,
  submitText: "ok",
  toolbar: undefined,
  onLoad() {
    this.canvas = document.getElementById("dp_canvas")
    this.ctx = this.canvas.getContext("2d");

    this.ctx.fillStyle = '#f0f';
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fill();

  },
  onUnload() {
    
  },
  onClick(id) {
    switch (id) {
      case "app_submit":
        return app.loadView(app.views.main_menu);
    }
  },
});

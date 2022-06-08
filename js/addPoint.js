app.registerModule({
  name: "addPoint",
  path: app.views.forms.addPoint,
  onLoad() { },
  onUnload() { },
  onClick(id) {
    if (id == "app_submit") {
      let name = document.getElementById("nazwa").value;
      let code = document.getElementById("identyfikator").value;
      let x = document.getElementById("szerokosc").value;
      x = parseFloat(x);
      let y = document.getElementById("dlugosc").value;
      y = parseFloat(y);
      let h = document.getElementById("wysokosc").value;
      h = parseFloat(h);

      if (!this.checkNumber(x, -90, 90)
        || !this.checkNumber(y, -180, 180)
        || !this.checkNumber(h)) {
        alert("Błędne dane liczbowe");

      } else {
        app.points.push({ name, code, x, y, h });
        return app.loadView(app.views.main_menu);
      }
    }
  },
  checkNumber(num, min = -Infinity, max = Infinity) {
    if (isNaN(num)) return false;
    if (typeof num !== 'number') return false;
    if (num < min) return false;
    if (num > max) return false;

    return true;
  }
});

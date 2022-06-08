// hint: include navigation.js
app.registerModule({
  name: "cogo",
  path: app.views.cogo,
  submitText: "ok",
  toolbar: undefined,
  onLoad() {
    this.table = document.getElementById("cogo_tablica");
    this.clearTable();
    app.points.forEach(p => this.addPoint(p));
  },
  onUnload() {
    this.table = undefined;
  },
  onClick(id) {
    switch (id) {
      case "app_submit":
        return app.loadView(app.views.main_menu);
    }
  },
  clearTable() {
    this.table.innerHTML = '';
  },
  addPoint(point) {
    const tr = document.createElement("tr");
    ['code', 'name', 'x', 'y', 'h'].forEach(prop => {
      const td = document.createElement("td");
      td.innerText = point[prop];
      tr.appendChild(td)
    });

    this.table.appendChild(tr);
  },
});

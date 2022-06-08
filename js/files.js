app.registerModule({
  name: "files",
  path: app.views.forms.files,
  onLoad() {
    this.updateCount();
  },
  onUnload() { },
  onClick(id) {
    switch (id) {
      case "fil_export":
        return this.export();
      case "fil_import":
        return this.import();
      case "submit":
        return app.loadView(app.views.main_menu);
    }
  },

  updateCount() {
    document.getElementById("fil_num")
      .innerText = app.points.length.toString();
  },
  export() {
    const text = document.getElementById("fil_text")
    text.value = app.points.map(
      p => `${p.name};${p.code};${p.x};${p.y};${p.h}`
    ).join('\n');
  },
  import() {
    if (!confirm("Wszystkie obecne dane zostaną skasowane!")) return;

    const text = document.getElementById("fil_text")
    try {
      const points = text.value.split("\n")
        .map(line => line.split(";"))
        .map(fields => {
          for (let i = 0; i < 5; ++i)
            if (!fields[i])
              throw new Error("Empty field");

          const name = fields[0];
          const code = fields[1];
          const x = parseFloat(fields[2]);
          const y = parseFloat(fields[3]);
          const h = parseFloat(fields[4]);

          if (!this.checkNumber(x, -90, 90)
            || !this.checkNumber(y, -180, 180)
            || !this.checkNumber(h))
            throw new Error("Wrong number");

          return { name, code, x, y, h };
        });
      app.points = points;
      this.updateCount();
    } catch (err) {
      alert("Nieprawidłowa składnia pliku!");
      console.log(err);
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

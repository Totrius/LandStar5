app.registerModule({
  name: "files",
  path: app.views.forms.files,
  submitText: undefined,
  toolbar: undefined,
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

          return {
            name: fields[0],
            code: fields[1],
            x: parseFloat(fields[2]),
            y: parseFloat(fields[3]),
            h: parseFloat(fields[4]),
          }
        });
      app.points = points;
      this.updateCount();
    } catch (err) {
      alert("Nieprawidłowa składnia pliku!");
      console.log(err);
    }
  }
});



//mm_pliki

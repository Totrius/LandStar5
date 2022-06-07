app.registerModule({
  name: "addPoint",
  path: app.views.forms.addPoint,
  submitText: "Zapisz",
  toolbar: "default",
  onLoad() {
    console.log("Dodaj punkt!");
  },
  onUnload() {1
    console.log("A to nie...");
  },
  onClick(id) { },
});

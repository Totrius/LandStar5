app.registerModule({
  name: "addPoint",
  path: app.views.forms.addPoint,
  submitText: "Zapisz",
  toolbar: "default",
  onLoad() {
  },
  onUnload() {1
    console.log("A to nie...");
  },
  onClick(id) {
      if (id == "app_submit") 
      {
        

        let nazwa= document.getElementById("nazwa").value;
        let kod= document.getElementById("identyfikator").value;
        let x=document.getElementById("szerokosc").value;
        x=parseFloat(x);
        let y=document.getElementById("dlugosc").value;
        y=parseFloat(y);
        let h = document.getElementById("wysokosc").value;
        h=parseFloat(h);

        app.points.push({ name: nazwa, code: kod, x: x, y: y, h: h });


        return app.loadView(app.views.main_menu);
      }

  },
});

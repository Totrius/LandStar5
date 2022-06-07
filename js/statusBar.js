app.registerModule({
  name: "statusBar",
  path: undefined,
  submitText: undefined,
  toolbar: undefined,
  onLoad() {
    this.setBattery1(Math.random());
    this.setBattery2(Math.random());
  },
  onUnload() { },
  onClick(id) { },
  
  getBatteryIcon(value) {
    if (value < 0.33) return 'bi bi-battery';
    if (value < 0.67) return 'bi bi-battery-half';
    return 'bi bi-battery-full';
  },
  setBattery1(value) {
    document.getElementById("app_battery1_val")
      .innerText = Math.round(value * 100).toString() + "%";
    document.getElementById("app_battery1_icon")
      .className = this.getBatteryIcon(value);
  },
  setBattery2(value) {
    document.getElementById("app_battery2_val")
      .innerText = Math.round(value * 100).toString() + "%";
    document.getElementById("app_battery2_icon")
      .className = this.getBatteryIcon(value);
  },
});

app.registerModule({
  name: "statusBar",
  path: undefined,
  onLoad() {
    this.sats = Math.round(Math.random() * 10) + 4;

    setInterval(() => {
      this.updateUI();
    }, 2000)
    this.updateUI(); 1
  },
  onUnload() { },
  onClick(id) { },

  updateUI() {
    navigator.getBattery()
      .then((battery) => {
        let level = battery.level
        this.setBattery1(level);
        this.setBattery2(level / 2);
      });

    this.sats += Math.round((Math.random() - 0.5) * 2);
    this.sats = Math.min(this.sats, 16);
    this.sats = Math.max(this.sats, 4);

    document.getElementById("app_sat")
      .innerText = `${this.sats}/16`;
  },
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

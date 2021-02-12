class CalcController {

  constructor() {
    this._locale = "pt-br"
    this._currentDate
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")

    this.initialize()
  }

  initialize() {
    this.displayDateTime()
    setInterval(() => {
      this.displayDateTime()
    }, 1000)

  }

  displayDateTime() {
    this.displayDate = this.currentDate.toLocaleDateString(this._locale, { day: "2-digit", month: "long", year: "numeric" })
    this.displayTime = this.currentDate.toLocaleTimeString(this._locale)
  }

  get displayTime() {
    return this._timeEl.innerHTML;
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value;
  }

  get displayDate() {
    return this._dateEl.innerHTML;
  }

  set displayDate(value) {
    this._dateEl.innerHTML = value;
  }


  get displayCalc() {
    return this._displayCalcEl.innerHTML;
  }

  set displayCalc(value) {
    this._displayCalcEl.innerHTML = value;
  }

  get currentDate() {
    return new Date();
  }

  set currentDate(value) {
    this.currentDate = value;
  }





}

class CalcController {

  constructor() {
    this._locale = "pt-br"
    this._currentDate
    this._displayCalcEl = document.querySelector("#display")
    this._dateEl = document.querySelector("#data")
    this._timeEl = document.querySelector("#hora")

    this.initialize()
    this.initButtonsEvents()
  }



  initialize() {
    this.displayDateTime()
    setInterval(() => {
      this.displayDateTime()
    }, 1000)

  }

  addEventListenerAll(element, events, fn) {
    events.split(' ').forEach(event => {
      element.addEventListener(event, fn, false);
    });
  }


  initButtonsEvents() {
    let buttons = document.querySelectorAll('#buttons > g , #parts > g');

    buttons.forEach((btn, index) => {
      this.addEventListenerAll(btn, 'click drag mouseover', e => {

        // let textBtn = btn.className.baseVal.replace('btn-', '');
        console.log(btn.className.baseVal.replace('btn-', ''))

        // this.execBtn(textBtn);

      });

      this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
        btn.style.cursor = "pointer"
      })

      // this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => { //troca o modelo seta do mouse para a maozinha
      //   btn.style.cursor = 'pointer';
    });
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

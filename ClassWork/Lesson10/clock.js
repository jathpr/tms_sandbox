class Clock {
  constructor({ template }) {
    this.template = template;
  }

  start() {
    const render2 = this.render.bind(clock);
    render2();
    this.timer = setInterval(render2, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }
}

let clock = new Clock({ template: 'h:m:s' });
let clock2 = new Clock({ template: 'hh:m:s' });
clock.start();

import Particle from './Particle';

function WordCloud(ctx, width, height, text, x, y, stationary, size) {
  this.vx = 0;
  this.vy = 0;
  if (!stationary) {
    this.vx = (-1) ** (Math.random() > 0.5) * Math.random();
    this.vy = (-1) ** (Math.random() > 0.5) * Math.random();
  }

  this.ctx = ctx;
  this.width = width;
  this.height = height;
  this.rotRadius = 2;

  this.text = text;
  this.ctx.font = `${size} sans-serif`;
  this.ctx.fillStyle = 'rgb(232,232,232)';
  const measure = this.ctx.measureText(this.text);
  this.wide = measure.width;
  this.top = measure.actualBoundingBoxAscent || 0;
  this.bottom = measure.actualBoundingBoxDescent || this.height / 4;
  this.x = x - (this.wide > this.width ? this.width : this.wide) / 2;
  this.y = y - (this.top + this.bottom + this.rotRadius + Particle.max) / 2;
  this.states = [];
  this.state = 0;
  this.count = 0;
  this.ready = 0;
}

WordCloud.prototype.init = function () {
  return (
    this.getParticles()
      .then((particles) => { this.particles = particles; })
      .then(() => this.preRender())
  );
};

WordCloud.prototype.getParticles = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      const particles = {};

      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.textBaseline = 'top';
      this.ctx.fillText(this.text, this.x, this.y, this.width);

      const { width, data } = this.ctx.getImageData(
        this.x,
        this.y,
        this.wide,
        this.height,
      ); // this.bottom + this.top

      for (let i = 0; i < data.length; i += 4) {
        if (data[i] > 0 && Math.random() > 0.95) {
          const x = (i / 4) % width;
          const y = Math.floor((i / 4) / width);
          const particle = new Particle(x, y);
          if (!particles[particle.alpha]) particles[particle.alpha] = [];
          particles[particle.alpha].push(particle);
        }
      }
      this.count = Object.keys(particles).reduce((total, alpha) => total + particles[alpha].length, 0);
      resolve(particles);
    }, 0);
  });
};

WordCloud.prototype.preRender = function () {
  const { cos } = Particle;

  const drawState = (i) => {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d', { alpha: true });

    const alphas = Object.keys(this.particles);
    for (const alpha of alphas) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(30,144,255,${alpha})`;

      this.particles[alpha].forEach((particle) => {
        const {
          x, y, radius, theta, dir,
        } = particle;
        const thetaShift = (theta + i) % cos.length;
        const xShift = this.rotRadius * Particle.cos[(dir) ? thetaShift : 19 - thetaShift];
        const yShift = this.rotRadius * Particle.sin[(dir) ? thetaShift : 19 - thetaShift];
        const xPos = ~~(x + xShift);
        const yPos = ~~(y + yShift);
        ctx.moveTo(xPos, yPos);
        ctx.arc(
          xPos,
          yPos,
          radius,
          0,
          Math.PI * 2,
        );
      });
      ctx.fill();
    }

    return canvas;
  };

  return Promise.all(cos.map((_, i) => new Promise((resolve) => setTimeout(() => resolve(drawState(i)), 0))))
    .then((bitmaps) => { this.states = bitmaps; });
};

WordCloud.prototype.draw = function () {
  if (!this.states.length) return;

  this.x += this.vx;
  this.y += this.vy;

  if (this.width < (this.x + this.wide) || (this.x < 0)) {
    this.vx = -this.vx;
  }
  if (this.height < (this.y + this.top + this.bottom) || (this.y < 0)) {
    this.vy = -this.vy;
  }

  this.ctx.drawImage(this.states[++this.state % this.states.length], this.x, this.y);
};

export default WordCloud;

function Particle(x: number, y: number): void {
  this.x = x;
  this.y = y;
  this.theta = Math.floor(20 * Math.random());
  this.dir = Math.random() > 0.5;

  const alpha = Math.random();
  if (alpha < 0.5) {
    this.alpha = 0.1;
  } else if (alpha < 0.75) {
    this.alpha = 0.3;
  } else {
    this.alpha = 0.9;
  }

  const radius = Math.random();
  if (radius < 0.5) {
    this.radius = 3;
  } else if (radius < 0.8) {
    this.radius = 5;
  } else {
    this.radius = 7;
  }
}

Particle.max = 7;
Particle.cos = Array(1 / 0.05).fill(0).map((_, i) => Math.cos(i * 0.05 * Math.PI * 2));
Particle.sin = Array(1 / 0.05).fill(0).map((_, i) => Math.sin(i * 0.05 * Math.PI * 2));

export default Particle;

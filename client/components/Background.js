import React, { useRef, useState, useEffect } from 'react';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';
const SMALL_HEIGHT = '414px';

const Particle = function(x, y) {
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
};

Particle.max = 7;
Particle.cos = Array(1 / 0.05).fill(0).map((_, i) => Math.cos(i * 0.05 * Math.PI * 2));
Particle.sin = Array(1 / 0.05).fill(0).map((_, i) => Math.sin(i * 0.05 * Math.PI * 2));

const WordCloud = function(ctx, width, height, text, x, y, stationary, size) {
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
  const measure = this.ctx.measureText(this.text)
  this.wide = measure.width;
  this.top = measure.actualBoundingBoxAscent;
  this.bottom = measure.actualBoundingBoxDescent;
  this.x = x - (this.wide > this.width ? this.width : this.wide) / 2;
  this.y = y - (this.top + this.bottom + this.rotRadius + Particle.max) / 2;
  this.states = [];
  this.state = 0;
  this.count = 0;
  this.ready = 0;
};

WordCloud.prototype.init = function() {
  return (
    this.getParticles()
    .then((particles) => this.particles = particles)
    .then(() => this.preRender())
  );
};

WordCloud.prototype.getParticles = function() {
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
        this.height); //this.bottom + this.top

      for (let i=0; i< data.length; i += 4) {
        if (data[i] > 0 && Math.random() > 0.95) {
          const x = (i / 4) % width;
          const y = Math.floor((i / 4) / width);
          const particle = new Particle(x, y);
          if (!particles[particle.alpha]) particles[particle.alpha] = [];
          particles[particle.alpha].push(particle);
        }
      }
      this.count = Object.keys(particles).reduce((total, alpha) => total += particles[alpha].length, 0);
      resolve(particles)
    }, 0);
  });
};

WordCloud.prototype.preRender = function() {
  const { cos } = Particle;

  const drawState = (i) => {
    const canvas = document.createElement('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    const ctx = canvas.getContext('2d', { alpha: true });

    for (const alpha in this.particles) {
      ctx.beginPath();
      ctx.fillStyle = `rgb(30,144,255,${alpha})`;

      this.particles[alpha].forEach((particle) => {
        const {x, y, radius, theta, dir} = particle;
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
          Math.PI * 2);
      });
      ctx.fill();
    }

    return canvas;
  }

  return Promise.all(cos.map((_, i) => new Promise((resolve) => setTimeout(() => resolve(drawState(i)), 0))))
  .then((bitmaps) => this.states = bitmaps);
};

WordCloud.prototype.draw = function() {
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

export default ({ active, words, stationary, size = '5em', onLoad = () => {} }) => {
  const ref = useRef();
  const [wordClouds, setWordClouds] = useState([]);

  const animate = () => {
    const ctx = ref.current.getContext('2d', { alpha: true });
    ctx.clearRect(0, 0, ref.current.width, ref.current.height);
    wordClouds.forEach((wordCloud) => wordCloud.draw());
    if (window.location.hash === '#about') requestAnimationFrame(animate);
  };

  useEffect(() => animate(), [active])

  useEffect(() => {
    Promise.all(wordClouds.map((cloud) => cloud.init()))
    .then(() => {
      animate();
      onLoad();
    });
  }, [wordClouds]);

  useEffect(() => {
    ref.current.width = window.innerWidth;
    ref.current.height = window.innerHeight;

    setWordClouds(() => words.map((word) =>  new WordCloud(
      ref.current.getContext('2d', { alpha: true }),
      ref.current.width,
      ref.current.height,
      word,
      ref.current.width / 2,
      ref.current.height / 2,
      stationary,
      size
    )));
  }, []);

  return (
    <canvas id='canvas' ref={ref}></canvas>
  )
};
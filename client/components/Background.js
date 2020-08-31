import React, { useRef, useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

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

Particle.prototype.step = function() {
  this.theta = (this.theta + 1) % 20;
}

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
  this.text = text;
  // this.ctx.textBaseline = 'ideographic';
  this.ctx.font = `${size} sans-serif`;
  this.ctx.fillStyle = 'rgb(232,232,232)';
  const measure = this.ctx.measureText(this.text)
  this.wide = measure.width;
  this.top = measure.actualBoundingBoxAscent;
  this.bottom = measure.actualBoundingBoxDescent;
  this.x = x - (this.wide > this.width ? this.width : this.wide) / 2;
  this.y = y - this.top - this.bottom;
  this.states = [];
  this.state = 0;
  this.particles = this.getParticles();
  this.createStates();
};

WordCloud.prototype.getParticles = function() {
  const particles = {};

  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.fillText(this.text, this.x, this.y, this.width);

  const myImageData = this.ctx.getImageData(
    this.x,
    this.y - (this.bottom + this.top),
    this.wide,
    this.bottom + this.top);
  const data = myImageData.data;

  // create particles
  for (let i=0; i< data.length; i += 4) {
    if (data[i] > 0 && Math.random() > 0.95) {
      const x = (i / 4) % myImageData.width;
      const y = Math.floor((i / 4) / myImageData.width);
      const particle = new Particle(x, y);
      if (!particles[particle.alpha]) particles[particle.alpha] = [];
      particles[particle.alpha].push(particle);
    }
  }

  return particles;
};

WordCloud.prototype.createStates = function() {
  const ROT_RADIUS = 2;
  const { cos } = Particle;
  const promises = [];
  let copy = ('createImageBitmap' in window)
    ? createImageBitmap
    : function(data, x, y, width, height) {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d', { alpha: true });
      ctx.putImageData(data, x, y);
      return new Promise((resolve) => resolve(canvas));
    };

  for (let i=0; i < cos.length; i++) {

    this.ctx.clearRect(0, 0, this.width, this.height);

    for (const alpha in this.particles) {
      this.ctx.beginPath();
      this.ctx.fillStyle = `rgb(30,144,255,${alpha})`;

      this.particles[alpha].forEach((particle) => {
        const {x, y, radius, theta, dir} = particle;
        particle.step();
        const xShift = ROT_RADIUS * Particle.cos[(dir) ? theta : 19 - theta];
        const yShift = ROT_RADIUS * Particle.sin[(dir) ? theta : 19 - theta];
        const xPos = ~~(this.x + x + xShift);
        const yPos = ~~(this.y + y + yShift);
        this.ctx.moveTo(xPos, yPos);
        this.ctx.arc(
          xPos,
          yPos,
          radius,
          0,
          Math.PI * 2);
      });
      this.ctx.fill();
    }

    const imageData = this.ctx.getImageData(
      this.x - Particle.max + ROT_RADIUS,
      this.y - Particle.max - ROT_RADIUS,
      this.wide + 2 * (Particle.max + ROT_RADIUS),
      this.bottom + this.top + 2 * (Particle.max + ROT_RADIUS));

    promises.push(copy(
      imageData, 0, 0,
      this.wide + 2 * (Particle.max + ROT_RADIUS),
      this.bottom + this.top + 2 * (Particle.max + ROT_RADIUS)));
  }

  Promise.all(promises)
  .then((bitmaps) => this.states = bitmaps);
}

WordCloud.prototype.draw = function() {
  if (!this.states.length) return;
  this.state = (this.state + 1) % this.states.length;
  this.x += this.vx;
  this.y += this.vy;
  if (this.width < (this.x + this.wide)) {
    this.vx = -this.vx;
  } else if (this.x < 0) {
    this.vx = -this.vx;
  }
  if (this.height < (this.y + this.top + this.bottom)) {
    this.vy = -this.vy;
  } else if (this.y < 0) {
    this.vy = -this.vy;
  }

  this.ctx.drawImage(this.states[this.state], this.x, this.y);
};

export default ({ words, stationary, size = '5em' }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.width = window.innerWidth;
    ref.current.height = window.innerHeight;
    const ctx = ref.current.getContext('2d', { alpha: true });

    const wordClouds = [];
    words.forEach((word) => {
      wordClouds.push(new WordCloud(
        ctx,
        window.innerWidth,
        window.innerHeight,
        word,
        ref.current.width / 2,
        ref.current.height / 2,
        stationary,
        size
      ));
    });

    const animate = () => {
      requestAnimationFrame(animate);
      // ctx.clearRect(0, 0, ref.current.width, ref.current.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(0, 0, ref.current.width, ref.current.height);
      ctx.fill();
      wordClouds.forEach((wordCloud) => wordCloud.draw());
    };

    animate();
  }, []);

  return (
    <canvas id='canvas' ref={ref} style={{ height: '100%', width: '100%' }}></canvas>
  )
};
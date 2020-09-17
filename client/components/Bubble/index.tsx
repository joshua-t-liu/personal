import React, {
  useRef, useState, useEffect, FC,
} from 'react';

import WordCloud from './WordCloud';

interface Props {
  active: boolean;
  words: Array<string>;
  stationary?: boolean;
  size: number;
  onLoad(): void;
}

const Bubble: FC<Props> = ({
  active, words, stationary, size = '5em', onLoad = () => {},
}) => {
  const ref = useRef();
  const [wordClouds, setWordClouds] = useState([]);

  const animate = () => {
    const ctx = ref.current.getContext('2d', { alpha: true });
    ctx.clearRect(0, 0, ref.current.width, ref.current.height);
    wordClouds.forEach((wordCloud) => wordCloud.draw());
    if (window.location.hash === '#about') requestAnimationFrame(animate);
  };

  useEffect(() => animate(), [active]);

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

    setWordClouds(() => words.map((word) => new WordCloud(
      ref.current.getContext('2d', { alpha: true }),
      ref.current.width,
      ref.current.height,
      word,
      ref.current.width / 2,
      ref.current.height / 2,
      stationary,
      size,
    )));
  }, []);

  return (
    <canvas id="canvas" ref={ref} />
  );
};

export default Bubble;

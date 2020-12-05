import React, {
  useRef,
  useState,
  useEffect,
  FC,
} from 'react';
import styled from 'styled-components';

import Container from '../Container';
import PortfolioCard from './PortfolioCard';
import portfolios from '../../portfolio_data';
import { computeClassNames } from '../../helper';
import { Buttons, Space } from './CarouselButtons';
import { HomeButton } from '../Buttons';
import Spinner from '../Spinner';

const SMALL_WIDTH = '768px';

const Title = styled.h2`
  font-size: 3em;
  flex-grow: 1;
  margin: 1em auto;
  opacity: 0;
  text-align: center;
  transform: translate(0, 300%);
  transition-property: opacity, transform;
  transition-delay: 0s;
  transition-duration: 0.33s;
  transition-timing-function: ease-in;
  &.active {
    opacity: 1;
    transform: translate(0, 0);
  }
  &.reverse {
    transform: translate(0, -300%);
  }
  @media (max-width: ${SMALL_WIDTH}) {
    margin: 0;
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  // margin: auto 0;
  height: 60vh;
  z-index: 10;
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    height: 100%;
    justify-content: center;
    &:before {
      content: none;
    }
    &:after {
      content: none;
    }
  }
`;

const CarouselInner = styled.div`
  width: calc(100vw - 4em);
  display: flex;
  opacity: 0;
  transform: ${({ $shift }) => `translate(${$shift}%, -125%)`};
  transition-property: opacity, transform;
  transition-delay: 0s;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &.active {
    opacity: 1;
    transform: ${({ $shift }) => `translate(${$shift}%, 0)`};
  }
  &.shift-left {
    transform: ${({ $shift }) => `translate(${$shift - 50}%, 0)`};
  }
  @media (max-width: ${SMALL_WIDTH}) {
    flex-wrap: wrap;
    opacity: 1;
    transform: translate(0, 25%);
    &.active {
      transform: translate(0, 0);
    }
  }
`;

interface Prop {
  active: boolean;
  innerHeight: number;
}

const Portfolio: FC<Prop> = ({ active, innerHeight }) => {
  const [shift, setShift] = useState(0);
  const [shiftLeft, setShiftLeft] = useState(null);
  const [offsets, setOffsets] = useState({ width: window.innerWidth });
  const [currPortfolio, setCurrPortfolio] = useState(null);
  const [animState, setAnimState] = useState(null);
  const [imgIsReady, setImgIsReady] = useState(0);
  const ref = useRef(null);

  // issue: Edge calls getOffsets with the wrong value
  useEffect(() => {
    const getOffsets = () => setOffsets(() => {
      const { offsetWidth, offsetTop } = ref.current;
      return { offsetWidth: offsetWidth / 4, offsetTop, width: window.innerWidth };
    });
    getOffsets();
  }, [active]);

  useEffect(() => {
    const getOffsets = () => setOffsets(() => {
      const { offsetWidth, offsetTop } = ref.current;
      return { offsetWidth: offsetWidth / 4, offsetTop, width: window.innerWidth };
    });

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => getOffsets());
      resizeObserver.observe(ref.current);
    } else {
      window.addEventListener('resize', () => getOffsets());
    }

    getOffsets();
  }, []);

  const close = () => {
    const ele: HTMLElement = document.getElementById('work');

    const closePortfolio = () => {
      if (!ele.scrollTop) {
        setAnimState('deactive');
        if (shiftLeft) setTimeout(() => setShiftLeft(null), 500);
        ele.removeEventListener('scroll', closePortfolio);
      } else {
        setTimeout(closePortfolio, 50);
      }
    };

    if (ele.scrollTo) {
      ele.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      ele.scrollTop = 0;
    }

    closePortfolio();
  };

  const isReady = active && imgIsReady === 2;

  return (
    <Container id="work" innerHeight={innerHeight}>
      {!isReady && active && <Spinner />}
      {animState && <HomeButton type="div" onClick={close} />}
      
      <HomeButton />
      <Title className={computeClassNames({ active: isReady, reverse: animState })}>Work</Title>

      <Carousel ref={ref} id="carousel">
        <Space
          left
          active={isReady}
          animState={animState}
          shift={shift}
          onClick={() => setShift(0)}
        />

        <CarouselInner
          className={computeClassNames({ active: isReady, 'shift-left': shiftLeft })}
          $shift={shift}
        >
          {portfolios.map((Work, idx) => (
            <PortfolioCard
              key={Work.title}
              Work={Work}
              animState={animState}
              offsets={offsets}
              active={currPortfolio === idx}
              index={idx}
              shift={shift}
              setShiftLeft={setShiftLeft}
              setCurrPortfolio={setCurrPortfolio}
              setAnimState={setAnimState}
              setImgIsReady={setImgIsReady}
              close={close}
            />
          ))}
        </CarouselInner>

        <Space
          active={isReady}
          animState={animState}
          shift={shift}
          onClick={() => setShift(-50)}
        />
      </Carousel>

      <Buttons
        active={isReady}
        animState={animState}
        shift={shift}
        setShift={setShift}
      />
    </Container>
  );
};

export default Portfolio;

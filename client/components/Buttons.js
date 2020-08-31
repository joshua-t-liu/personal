import React, { useRef, useState, useEffect, forwardRef } from 'react';
import styled, { css, keyframes } from 'styled-components';

const SMALL_WIDTH = '768px';
const MEDIUM_WIDTH = '1248px';

const CTA = styled.a`
  display: inline-block;
  font-size: 1.25em;
  align-self: center;
  padding: 1em 3em;
  border: 1px solid dodgerblue;
  border-radius: 0.25em;
  cursor: pointer;
  background-color: white;
  color: dodgerblue;
  font-weight: bold;
  box-shadow: dodgerblue 0px 10px 20px -10px;
  text-decoration: none;
  margin: ${({ margin }) => margin};
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
`;

const CTANav = styled.a`
  overflow: hidden;
  display: inline-block;
  font-size: 1.25em;
  align-self: center;
  border: 1px solid dodgerblue;
  border-radius: 0.25em;
  cursor: pointer;
  background-color: white;
  color: dodgerblue;
  font-weight: bold;
  box-shadow: dodgerblue 0px 10px 20px -10px;
  text-decoration: none;
  font-size: 1em;
  margin: 0 1em;
  margin-top: -10em;
  max-width: 0;
  padding: 0;
  &:hover {
    background-color: dodgerblue;
    color: white;
  }
  transition: margin-top 0.5s ease-in 0s, max-width 0s ease-in 0.5s, padding 0s ease-in 0.5s;
  &.active {
    margin-top: 0;
    max-width: 10em;
    padding: 0.25em 1em;
    transition: margin-top 0.5s ease-in 0s;
  }
  &:after {
    content: "LET'S CHAT";
  }
  @media (max-width: ${MEDIUM_WIDTH}) {
    &:after {
      content: "CHAT";
    }
  }
`;

const Icon = styled.svg`
  margin: 0.5em;
  cursor: pointer;
`;

//Icons made by <a href="https://www.flaticon.com/free-icon/close_151882?term=close&page=1&position=4" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const Close = ({ onClick, fill }) => (
  <Icon height='1em' x="0px" y="0px" viewBox="0 0 47.971 47.971" fill={fill || 'rgb(255,255,255)'} onClick={onClick}>
    <g>
      <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
    </g>
  </Icon>
)

//<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

const StyledMore = styled.svg`
  margin: 1em;
  display: none;
  cursor: pointer;
  @media (max-width: ${MEDIUM_WIDTH}) {
    display: block;
  }
`;

const More = ({ onClick }) => {
  return (
    <StyledMore viewBox="0 0 384 384" height='1em' fill='rgb(74,74,74)' onClick={onClick}>
      <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
      <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
    </StyledMore>
  )
}

//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const GitHub = ({ href = 'https://github.com/joshua-t-liu' }) => (
  <a href={href} aria-label='Github'>
    <Icon height='3em' x="0px" y="0px" viewBox="0 0 512 512" fill='rgb(74,74,74)'>
      <circle r='48%' fill='rgb(255,255,255)' cx='50%' cy='50%' />
      <g>
        <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872    c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464    c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496    c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368    c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68    c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672    c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992    c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496    c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z"/>
      </g>
    </Icon>
  </a>
)

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const Linkedin = ({ href = 'https://www.linkedin.com/in/joshuathliu/' }) => (
  <a href={href} aria-label='Linkedin'>
    <Icon height='3em' viewBox="0 0 512 512" fill='rgb(74,74,74)'>
      <circle r='48%' fill='rgb(255,255,255)' cx='50%' cy='50%' />
      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/>
    </Icon>
  </a>
);

//Icons made by <a href="https://www.flaticon.com/free-icon/email_181535" title="Chanut">Chanut</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const Email = ({ href }) => (
  <a href='mailto:josh.th.liu@gmail.com' aria-label='Email'>
    <Icon x="0px" y="0px" viewBox="0 0 299.997 299.997" fill='rgb(74,74,74)' height='3em'>
      <g>
        <circle r='48%' fill='rgb(255,255,255)' cx='50%' cy='50%' />
        <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150    C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009    c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749    l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721    c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0    c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721    c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749    V196.423z"/>
      </g>
    </Icon>
  </a>
)

const ChatButton = forwardRef((props, ref) => (
  <CTA ref={ref} href='mailto:josh.th.liu@gmail.com' aria-label='Email' {...props}>LET'S CHAT</CTA>
));

const ChatNavButton = (props) => (
  <CTANav href='mailto:josh.th.liu@gmail.com' aria-label='Email' {...props} />
);

const GitHubButton = ({ href = 'https://github.com/joshua-t-liu' }) => (
  <CTA href={href} aria-label='Github Code'>VIEW CODE</CTA>
);

const MoreMenuContacts = styled.div`
  align-self: stretch;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-evenly' };
  align-items: flex-end;
  flex-grow: ${({ flexGrow }) => flexGrow || 1};
  display: flex;
  @media (max-width: ${SMALL_WIDTH}) {
    margin-bottom: 1em;
  }
`;

const MoreMenuContact = styled.div`
  flex-grow: 1;
  display: flex;
`;

const Social = (props) => (
  <MoreMenuContacts {...props}>
    <GitHub />
    <Linkedin />
    <Email />
  </MoreMenuContacts>
);

//Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
const StyledHomeButton = styled.div`
  z-index: 1000;
  cursor: pointer;
  position: fixed;
  top: 3em;
  right: 3em;
  border-radius: 0.25em;
  padding: 1em;
  border: solid 0.1em rgb(30, 144, 255);
  & > svg {
    fill: rgb(30, 144, 255);
  }
  &:hover {
    background-color: rgb(30, 144, 255);
    & > svg {
      fill: rgb(255, 255, 255);
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    display: none;
  }
`;

const StyledHomeButtonMobile = styled(StyledHomeButton)`
  display: ${({ $onlyMobile }) => ($onlyMobile) ? 'none' : 'block'};
  position: ${({ $position }) => $position};
  border: none;
  bottom: auto;
  top: 1em;
  right: 1em;
  @media (max-width: ${SMALL_WIDTH}) {
    display: block;
  }
`;

const HomeButton = () => {
  return (
    <StyledHomeButton as='a' href='#home'>
      <svg height='1em' x="0px" y="0px" viewBox="0 0 47.971 47.971" fill='rgb(51,51,51)'>
        <g>
          <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
        </g>
      </svg>
      {/* <svg x="0px" y="0px" viewBox="0 0 492 492" height='2em'>
        <g>
          <path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388    c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844    l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752    c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"/>
        </g>
      </svg> */}
    </StyledHomeButton>
  )
};

const CloseV2 =({ type = 'a', onlyMobile = true, position }) => (
  <StyledHomeButtonMobile as={type} href='#home' $onlyMobile={onlyMobile} $position={position}>
    <svg height='1em' x="0px" y="0px" viewBox="0 0 47.971 47.971" fill='rgb(51,51,51)'>
      <g>
        <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
      </g>
    </svg>
  </StyledHomeButtonMobile>
);

export {
  ChatButton,
  ChatNavButton,
  GitHubButton,
  More,
  Close,
  GitHub,
  Linkedin,
  Email,
  Social,
  HomeButton,
  CloseV2,
};

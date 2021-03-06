import React, {
  FC,
} from 'react';
import styled from 'styled-components';
import {
  Link,
} from "react-router-dom";

const SMALL_WIDTH = '768px';

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

const Icon = styled.svg`
  margin: 0.5em;
  cursor: pointer;
`;

interface LinkProps {
  href: string;
}

const GitHub: FC<LinkProps> = ({ href = 'https://github.com/joshua-t-liu' }) => (
  <a href={href} aria-label="Github">
    <Icon height="3em" x="0px" y="0px" viewBox="0 0 512 512" fill="rgb(74,74,74)">
      <circle r="48%" fill="rgb(255,255,255)" cx="50%" cy="50%" />
      <g>
        <path d="M255.968,5.329C114.624,5.329,0,120.401,0,262.353c0,113.536,73.344,209.856,175.104,243.872    c12.8,2.368,17.472-5.568,17.472-12.384c0-6.112-0.224-22.272-0.352-43.712c-71.2,15.52-86.24-34.464-86.24-34.464    c-11.616-29.696-28.416-37.6-28.416-37.6c-23.264-15.936,1.728-15.616,1.728-15.616c25.696,1.824,39.2,26.496,39.2,26.496    c22.848,39.264,59.936,27.936,74.528,21.344c2.304-16.608,8.928-27.936,16.256-34.368    c-56.832-6.496-116.608-28.544-116.608-127.008c0-28.064,9.984-51.008,26.368-68.992c-2.656-6.496-11.424-32.64,2.496-68    c0,0,21.504-6.912,70.4,26.336c20.416-5.696,42.304-8.544,64.096-8.64c21.728,0.128,43.648,2.944,64.096,8.672    c48.864-33.248,70.336-26.336,70.336-26.336c13.952,35.392,5.184,61.504,2.56,68c16.416,17.984,26.304,40.928,26.304,68.992    c0,98.72-59.84,120.448-116.864,126.816c9.184,7.936,17.376,23.616,17.376,47.584c0,34.368-0.32,62.08-0.32,70.496    c0,6.88,4.608,14.88,17.6,12.352C438.72,472.145,512,375.857,512,262.353C512,120.401,397.376,5.329,255.968,5.329z" />
      </g>
    </Icon>
  </a>
);

const Linkedin: FC<LinkProps> = ({ href = 'https://www.linkedin.com/in/joshuathliu/' }) => (
  <a href={href} aria-label="Linkedin">
    <Icon height="3em" viewBox="0 0 512 512" fill="rgb(74,74,74)">
      <circle r="48%" fill="rgb(255,255,255)" cx="50%" cy="50%" />
      <path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0" />
    </Icon>
  </a>
);

const Email: FC<LinkProps> = ({ href }) => (
  <a href="mailto:josh.th.liu@gmail.com" aria-label="Email">
    <Icon x="0px" y="0px" viewBox="0 0 299.997 299.997" fill="rgb(74,74,74)" height="3em">
      <g>
        <circle r="48%" fill="rgb(255,255,255)" cx="50%" cy="50%" />
        <path d="M149.996,0C67.157,0,0.001,67.158,0.001,149.997c0,82.837,67.156,150,149.995,150s150-67.163,150-150    C299.996,67.158,232.835,0,149.996,0z M149.999,52.686l88.763,55.35H61.236L149.999,52.686z M239.868,196.423h-0.009    c0,8.878-7.195,16.072-16.072,16.072H76.211c-8.878,0-16.072-7.195-16.072-16.072v-84.865c0-0.939,0.096-1.852,0.252-2.749    l84.808,52.883c0.104,0.065,0.215,0.109,0.322,0.169c0.112,0.062,0.226,0.122,0.34,0.179c0.599,0.309,1.216,0.558,1.847,0.721    c0.065,0.018,0.13,0.026,0.195,0.041c0.692,0.163,1.393,0.265,2.093,0.265h0.005c0.005,0,0.01,0,0.01,0    c0.7,0,1.401-0.099,2.093-0.265c0.065-0.016,0.13-0.023,0.195-0.041c0.63-0.163,1.245-0.412,1.847-0.721    c0.114-0.057,0.228-0.117,0.34-0.179c0.106-0.06,0.218-0.104,0.322-0.169l84.808-52.883c0.156,0.897,0.252,1.808,0.252,2.749    V196.423z" />
      </g>
    </Icon>
  </a>
);

const GitHubButton: FC<LinkProps> = ({ href = 'https://github.com/joshua-t-liu' }) => (
  <CTA href={href} aria-label="Github Code">VIEW CODE</CTA>
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

const Social = (props) => (
  <MoreMenuContacts {...props}>
    <GitHub />
    <Linkedin />
    <Email />
  </MoreMenuContacts>
);

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
  @media (min-width: ${SMALL_WIDTH}) {
    &:hover {
      background-color: rgb(30, 144, 255);
      & > svg {
        fill: rgb(255, 255, 255);
      }
    }
  }
  @media (max-width: ${SMALL_WIDTH}) {
    top: 1em;
    right: 1em;
    border: none;
  }
`;

const StyledHomeButtonMobile = styled(StyledHomeButton)`
  display: ${({ $onlyMobile }) => (($onlyMobile) ? 'none' : 'block')};
  position: ${({ $position }) => $position};
  border: none;
  bottom: auto;
`;

interface CloseProps {
  type?: string;
  onlyMobile?: boolean;
  position?: string;
  onClick(): void;
}

const HomeButton: FC<CloseProps> = ({
  type = 'a', onlyMobile = true, position, onClick,
}) => (
  <Link to='/'>
    <StyledHomeButton as={type} href="#home" onClick={onClick}>
      <svg height="1em" x="0px" y="0px" viewBox="0 0 47.971 47.971" fill="rgb(51,51,51)">
        <g>
          <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
        </g>
      </svg>
    </StyledHomeButton>
  </Link>
);

const CloseV2: FC<CloseProps> = ({
  type = 'a', onlyMobile = true, position, onClick,
}) => (
  <StyledHomeButtonMobile as={type} href="#home" $onlyMobile={onlyMobile} $position={position} onClick={onClick}>
    <svg height="1em" x="0px" y="0px" viewBox="0 0 47.971 47.971" fill="rgb(51,51,51)">
      <g>
        <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
      </g>
    </svg>
  </StyledHomeButtonMobile>
);

interface ArrowProps {
  onClick(): void;
  active: boolean;
}

const LeftArrow: FC<ArrowProps> = ({ onClick, active }) => (
  <svg height="1.5em" x="0px" y="0px" viewBox="0 0 447.243 447.243" onClick={onClick} style={{ display: !active && 'none', cursor: 'pointer' }}>
    <g>
      <path d="M420.361,192.229c-1.83-0.297-3.682-0.434-5.535-0.41H99.305l6.88-3.2c6.725-3.183,12.843-7.515,18.08-12.8l88.48-88.48    c11.653-11.124,13.611-29.019,4.64-42.4c-10.441-14.259-30.464-17.355-44.724-6.914c-1.152,0.844-2.247,1.764-3.276,2.754    l-160,160C-3.119,213.269-3.13,233.53,9.36,246.034c0.008,0.008,0.017,0.017,0.025,0.025l160,160    c12.514,12.479,32.775,12.451,45.255-0.063c0.982-0.985,1.899-2.033,2.745-3.137c8.971-13.381,7.013-31.276-4.64-42.4    l-88.32-88.64c-4.695-4.7-10.093-8.641-16-11.68l-9.6-4.32h314.24c16.347,0.607,30.689-10.812,33.76-26.88    C449.654,211.494,437.806,195.059,420.361,192.229z" />
    </g>
  </svg>
);

const RightArrow: FC<ArrowProps> = ({ onClick, active }) => (
  <svg height="1.5em" x="0px" y="0px" viewBox="0 0 447.243 447.243" onClick={onClick} style={{ display: !active && 'none', cursor: 'pointer' }}>
    <g>
      <path d="M437.883,201.174c-0.008-0.008-0.017-0.017-0.025-0.025l-160-160c-12.552-12.441-32.813-12.351-45.254,0.201    c-0.983,0.992-1.9,2.047-2.746,3.159c-8.971,13.381-7.013,31.276,4.64,42.4l88.32,88.64c4.695,4.7,10.093,8.641,16,11.68    l9.76,5.12h-314.4c-16.099-0.677-30.349,10.332-33.76,26.08c-2.829,17.445,9.019,33.881,26.465,36.71    c1.83,0.297,3.682,0.434,5.535,0.41h315.52l-6.88,3.2c-6.713,3.135-12.83,7.412-18.08,12.64l-88.48,88.48    c-11.653,11.124-13.611,29.019-4.64,42.4c10.441,14.259,30.464,17.355,44.724,6.914c1.152-0.844,2.247-1.764,3.276-2.754l160-160    C450.361,233.939,450.372,213.678,437.883,201.174z" />
    </g>
  </svg>
);

export {
  GitHubButton,
  Social,
  HomeButton,
  CloseV2,
  LeftArrow,
  RightArrow,
};

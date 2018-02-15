import React from 'react';
import styled from 'styled-components';

const offset = 187,
      duration = 1.4,
      base = 65,
      viewBase = 66,
      cBase = 33,
      rBase = 30,
      strokeBase = 6;

const SVG = styled.svg`
  animation: rotator ${duration}s linear infinite;
  margin-right: ${({ small }) => (small ? '15px' : '20px')};

  .path {
    stroke-dasharray: ${({ scale }) => offset * scale};
    stroke-dashoffset: 0;
    transform-origin: center;
    animation:
      dash ${duration}s ease-in-out infinite,
      colors ${duration*4}s ease-in-out infinite;
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  @keyframes colors {
    ${({ color }) => {
      return `
        0% { stroke: ${color} }
        100% { stroke: ${color} }
      `;
    }};
  }

  @keyframes dash {
    0% { stroke-dashoffset: ${({ scale }) => offset * scale}; }
    50% {
     stroke-dashoffset: ${({ scale }) => (offset * scale)/4};
     transform:rotate(135deg);
    }
    100% {
     stroke-dashoffset: ${({ scale }) => offset * scale};
     transform:rotate(450deg);
    }
  }
`;

const Spinner = ({ color, small = false }) => {
  const scale = small ? 0.2 : 0.25,
        scaledBase = `${base * scale}px`,
        scaledView = viewBase * scale,
        scaledC = cBase * scale,
        scaledR = rBase * scale,
        scaledStroke = strokeBase * scale;

  return (
    <SVG
      small={small}
      scale={scale}
      color={color}
      width={scaledBase}
      height={scaledBase}
      viewBox={`0 0 ${scaledView} ${scaledView}`}
      xmlns="http://www.w3.org/2000/svg"
    >
     <circle className="path" fill="none" strokeLinecap="round"
       strokeWidth={scaledStroke}
       cx={scaledC}
       cy={scaledC}
       r={scaledR}
     />
    </SVG>
  );
};

export default Spinner;

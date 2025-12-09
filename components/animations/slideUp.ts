import { keyframes } from 'styled-components';

const slideUpAnimation = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideUp = (duration = '0.5s', delay = '0s') => `
  animation: ${slideUpAnimation} ${duration} ease-out ${delay} forwards;
`;

export default slideUp;
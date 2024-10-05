import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px;
`;

export const Loader = styled.div`
  border: 8px solid #f3f3f3; /* Светлый цвет фона */
  border-top: 8px solid #3498db; /* Цвет верхней части */
  border-radius: 50%;
  width: 50px; /* Ширина колесика */
  height: 50px; /* Высота колесика */
  animation: ${spin} 1s linear infinite; /* Применяем анимацию */
`;

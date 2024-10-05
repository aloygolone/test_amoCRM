import styled from "styled-components";

export const CardContainer = styled.div`
width: 460px;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #dee4f3;
  height: 210px;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h1`
  color: red;
`;

export const TaskContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const Svg = styled.svg`

`
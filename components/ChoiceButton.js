import React from "react";
import styled from "styled-components";

const ChoiceElement = styled.li`
  list-style: none;
  display: inline-block;
  width: 18%;
  vertical-align: top;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  color: #000000;
  cursor: pointer;
  div {
    width: 100%;
    display: inline-block;
    line-height: 45px;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    list-style: none;

    a {
      height: 45px;
      margin: 0 auto;
      border: 1px solid #000;
      line-height: 1.1em;
      display: flex;
      align-items: center;
      width: auto;
      margin-left: 10px;
      margin-right: 10px;
    }
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

export default function ChoiceButton({ onClick, children }) {
  return (
    <ChoiceElement>
      <div>
        <a onClick={onClick()}>
          <div>{children}</div>
        </a>
      </div>
    </ChoiceElement>
  );
}

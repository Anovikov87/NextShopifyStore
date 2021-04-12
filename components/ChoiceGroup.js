import React from "react";
import styled from "styled-components";
import ChoiceButton from "./ChoiceButton";

const ChoiceGroupStyle = styled.ul`
  list-style: none;
  line-height: 1.6em;
  margin: 1em 0;
  padding: 0 1.5em;
  border: 0;
  font-size: 100%;
  font: inherit;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  text-align: center;
`;

export default function ChoiceGroup({
  matches = [],
  handleClick,
  choices = [],
  position,
}) {
  return (
    <div>
      <ChoiceGroupStyle>
        {choices.map(
          (choice) =>
            matches.length == position && (
              <ChoiceButton key={choice} onClick={() => handleClick}>{choice}</ChoiceButton>
            )
        )}
        {matches.length >= position + 1 && (
          <ChoiceButton onClick={() => {}}>{matches[position]}</ChoiceButton>
        )}
      </ChoiceGroupStyle>
    </div>
  );
}
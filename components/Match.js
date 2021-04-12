import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ChoiceButton from "./ChoiceButton";
import ChoiceGroup from "./ChoiceGroup";
import Recommended from "./Recommended";

const MatchMenu = styled.div`
  background: #717171;
  display: flex;
  justify-content: space-between;
  margin-bottom: 38px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

const MatchMenuItem = styled.div`
  background-color: #4d4d4d;
  top: 0;
  width: auto;
  flex-grow: 1;
  flex-basis: 14%;
  color: #fff;
  position: relative;
  display: inline-block;
  font-size: 14px;
  height: 46px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: baseline;
  letter-spacing: 0.1em;
`;

export default function Match() {
  const [matches, setMatches] = useState([]);
  function reset() {
    console.log("reset");
    console.log(matches);
    setMatches([]);
  }
  function handleClick(e) {
    console.log("click");
    setMatches([...matches, e.target.innerText]);

    console.log(matches);
  }

  return (
    <div>
      <MatchMenu>
        <MatchMenuItem>Option 1</MatchMenuItem>
        <MatchMenuItem>Option 2</MatchMenuItem>
        <MatchMenuItem>Option 3</MatchMenuItem>
        <MatchMenuItem>Option 4</MatchMenuItem>
        <MatchMenuItem onClick={reset}>FROM THE BEGINNING</MatchMenuItem>
      </MatchMenu>
      {matches.length < 4 && (
        <ChoiceGroup
          matches={matches}
          handleClick={handleClick}
          choices={["Choice 1", "Choice 2", "Choice 3"]}
          position={0}
        />
      )}
      {matches.length < 4 && matches.length > 0 && (
        <ChoiceGroup
          matches={matches}
          handleClick={handleClick}
          choices={["Choice 2-1", "Choice 2-2", "Choice 2-3", "Choice 2-4"]}
          position={1}
        />
      )}
      {matches.length < 4 && matches.length > 1 && (
        <ChoiceGroup
          matches={matches}
          handleClick={handleClick}
          choices={["Choice 3-1", "Choice 3-2", "Choice 3-3"]}
          position={2}
        />
      )}
      {matches.length < 4 && matches.length > 2 && (
        <ChoiceGroup
          matches={matches}
          handleClick={handleClick}
          choices={["Choice 4-1", "Choice 4-2", "Choice 4-3"]}
          position={3}
        />
      )}
      {matches.length == 4 && <Recommended matches={matches} />}
    </div>
  );
}

import React from "react";
import ChordWithLargeNodes from "./ChordWithLargeNodes";
import ChordWithSelfLinks from "./ChordWithSelfLinks";
import SimpleChordDiagram from "./SimpleChordDiagram";
import SimpleChordWithBlend from "./SimpleChordWithBlend";

function RenderChordDiagram(props) {
  return (
    <>
      <h1>Chord Diagram</h1>
      <SimpleChordDiagram />
      <SimpleChordWithBlend />
      <ChordWithSelfLinks />
      <ChordWithLargeNodes />
    </>
  );
}

export default RenderChordDiagram;

import { Container } from "@material-ui/core";
import Italy from "@svg-maps/italy";
import React from "react";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";

export default class App extends React.Component {
  render() {
    return (
      <Container maxWidth="md">
        <SVGMap map={Italy} />
      </Container>
    );
  }
}

import React from "react";
import Button from "@material-ui/core/Button";

import MultipleChoiceForm from "./MultipleChoiceForm";

export default function MultipleChoiceQuiz() {
  const opts = ["a", "b", "c"];
  return (
    <>
      <MultipleChoiceForm regionOpts={opts} />
    </>
  );
}

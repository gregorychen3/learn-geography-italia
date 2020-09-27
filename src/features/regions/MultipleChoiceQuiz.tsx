import React from "react";
import MultipleChoiceForm from "./MultipleChoiceForm";

export default function MultipleChoiceQuiz() {
  const opts = ["a", "b", "c"];
  return (
    <>
      <MultipleChoiceForm opts={opts} />
    </>
  );
}

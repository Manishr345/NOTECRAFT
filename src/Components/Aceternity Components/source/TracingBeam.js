import React from "react";
import { TracingBeam } from "../support/tracing-beam";
import Home from "../../../Pages/Home";

export function TracingBeamDemo() {
  return (
    (<TracingBeam>
        <Home/>
    </TracingBeam>)
  );
}
import React, { useEffect } from "react";
import { TracingBeam } from "../support/tracing-beam";
import Home from "../../../Pages/Home";

export function TracingBeamDemo({setNav}) {
  useEffect(() => {
    setNav(true);
  })
  return (
    (<TracingBeam>
        <Home/>
    </TracingBeam>)
  );
}
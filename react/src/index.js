import { render } from "react-dom";

import { Suspense, lazy } from "react";

import Wait from "react-spinners/BeatLoader";

const Timeout = lazy(() => import("./Timeout.js"));

render(
  <Suspense fallback={<Wait />}>
    <Timeout />
  </Suspense>,
  document.querySelector(".cont")
);

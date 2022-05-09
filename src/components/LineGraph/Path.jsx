import React from "react";
import types from "../_types";

const Path = ({ accent, strokeWidth, path }) => (
  <>
    <defs>
      <linearGradient id='grad1' x1={"0%"} x2={"50%"} x3={"100%"}>
        <stop offset='0%' stop-color='#7e8dfb' stop-opacity='0.1' />
        <stop offset='50%' stop-color='#7e8dfb' stop-opacity='0.25' />
        <stop offset='100%' stop-color='#7e8dfb' stop-opacity='1' />
      </linearGradient>
    </defs>
    <path
      fill='transparent'
      stroke='url(#grad1)'
      strokeWidth={strokeWidth}
      d={path}
    />
  </>
);

Path.propTypes = {
  accent: types.accent.isRequired,
  strokeWidth: types.strokeWidth.isRequired,
  path: types.path.isRequired
};

export default Path;

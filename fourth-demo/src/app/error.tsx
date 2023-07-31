"use client";

import React from "react";

type Props = {
  error: Error;
  reset: () => void;
};

const error = ({ error, reset }: Props) => {
  return (
    <>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
};

export default error;

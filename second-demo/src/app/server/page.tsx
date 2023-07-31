import React from "react";

const ServerComponent = () => {
console.log('Server page rendering: this should only be printed on the server');
  return (
    <div>
      <h1>Server Page</h1>
    </div>
  );
};

export default ServerComponent;

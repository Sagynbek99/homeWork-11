import React, { useState } from "react";

function From({ LuftingUp }) {
  const [state, setState] = useState('fhhgsg');
  LuftingUp(state)
  return <div>from</div>;
}

export default From;

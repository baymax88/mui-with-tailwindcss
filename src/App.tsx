import * as React from "react";
import Tooltip from "@mui/material/Tooltip";

export default function App() {
  return (
    <div className="my-2">
      <div className="text-2xl text-red-400 bg-sky-200">
        tailwind css testing
      </div>
      <Tooltip
        arrow
        title="testing"
        classes={{
          tooltip: "rounded-none text-sm text-red-400"
        }}
      >
        <div className="text-red-400 text-xl font-medium">testing</div>
      </Tooltip>
    </div>
  );
}

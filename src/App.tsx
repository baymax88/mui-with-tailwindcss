import * as React from "react";
import { Dialog, Tooltip } from "@mui/material";

export default function App() {
  return (
    <div className="my-2">
      <div className="text-2xl text-red-400 bg-sky-200">
        tailwind css classes are working here
      </div>
      <Tooltip
        arrow
        title="testing"
        classes={{
          tooltip: "rounded-none text-sm text-red-400",
        }}
      >
        <div className="text-red-400 text-xl font-medium">testing</div>
      </Tooltip>
      <Dialog open={true}>
        <div className="text-red-400 text-xl font-medium p-4">
          tailwindcss classes are not working here
        </div>
      </Dialog>
    </div>
  );
}

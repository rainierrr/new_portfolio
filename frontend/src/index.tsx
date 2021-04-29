import * as React from "react"
import { render } from "react-dom"

function Root(){
  return (
    <div>
      test
    </div>
  );
}

render(<Root />, document.getElementById("app"));
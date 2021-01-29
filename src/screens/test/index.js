import React from "react";

import { Subscribe } from "unstated";
import AppContainer from "../../containers/AppContainer";

export default function TestScreen() {
  return (
    <Subscribe to={[AppContainer]}>
      {(appState) => {
        return (
          <>
            <button
              onClick={() => {
                AppContainer.doneSkill();
              }}
            >
              Hello
            </button>
            <p>{JSON.stringify(appState.state)}</p>
          </>
        );
      }}
    </Subscribe>
  );
}

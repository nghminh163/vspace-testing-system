import React, { Suspense } from "react";
import { AuthCheck } from "reactfire";
import { Subscribe } from "unstated";
import isNull from "lodash/isNull";

import AppContainer from "./containers/AppContainer";
import LoadingScreen from "./components/loading";

const LoginScreen = React.lazy(() => import("./screens/login"));
const ReviewScreen = React.lazy(() => import("./screens/review"));
const PreTestScreen = React.lazy(() => import("./screens/pretest"));
const TestScreen = React.lazy(() => import("./screens/test"));
export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AuthCheck
        requiredClaims={{ candidate: true }}
        fallback={<LoginScreen />}
      >
        <Subscribe to={[AppContainer]}>
          {(app) => {
            return app.state.reviewed ? (
              isNull(app.state.test_skill) ? (
                <PreTestScreen />
              ) : (
                <TestScreen />
              )
            ) : (
              <ReviewScreen />
            );
          }}
        </Subscribe>
      </AuthCheck>
    </Suspense>
  );
}

import React, { Suspense } from "react";
import { AuthCheck } from "reactfire";

import LoadingScreen from "./components/loading";

const LoginScreen = React.lazy(() => import("./screens/login"));
const HomeScreen = React.lazy(() => import("./screens/review"));

export default function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <AuthCheck
        requiredClaims={{ candidate: true }}
        fallback={<LoginScreen />}
      >
        <HomeScreen />
      </AuthCheck>
    </Suspense>
  );
}

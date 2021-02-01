import React from "react";
import firebase from "firebase";
import { useFirebaseApp } from "reactfire";
import Button from "@material-ui/core/Button";

export default function MockLogin() {
  const app = useFirebaseApp();
  app.auth().useEmulator("http://localhost:9099/");

  return (
    <Button
      onClick={() => {
        app
          .auth()
          .signInWithCredential(
            firebase.auth.GoogleAuthProvider.credential(
              '{"displayName": "Abc", "sub": "abc123", "email": "foo@example.com", "email_verified": true}'
            )
          );
      }}
    >
      Login Mock with Google
    </Button>
  );
}

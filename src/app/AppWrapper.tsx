import React from "react";
import Amplify from "aws-amplify";
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';

import Splash from "../splash/Splash";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

function AppWrapper() {
  const [content] = React.useState(<Splash />);

  return (
    <>
      { content }
    </>
  );
}

export default withAuthenticator(AppWrapper, true);

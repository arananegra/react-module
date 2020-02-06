import * as React from 'react';
import { CenteredLayout } from 'layout';
import { LoginContainer } from "../pods/login";

export const LoginScene = (props) => {
  return (
    <CenteredLayout>
      <LoginContainer {...props}/>
    </CenteredLayout>
  )
}

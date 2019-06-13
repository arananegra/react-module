import * as React from 'react';
import { CenteredLayout} from 'layout';
import { LoginContainer } from 'pods/login/login.container';

export const LoginScene = () => {
  return (
    <CenteredLayout>
      <LoginContainer/>
    </CenteredLayout>
  )
}

import * as React from 'react';
import { CenteredLayout } from 'layout';
import { LoginComponent } from 'pods/login/login.component';

export const LoginScene = () => {
  return (
    <CenteredLayout>
      <LoginComponent />
    </CenteredLayout>
  )
}

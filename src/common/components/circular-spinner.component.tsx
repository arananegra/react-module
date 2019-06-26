import * as React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress';

interface Props {
  area: string;
  className?: any;
  children: React.ReactElement;
}

export const LoadingCircularSpinnerComponent = (props: Props) => {
  const {promiseInProgress} = usePromiseTracker({area: props.area});
  return (
    <>
      {
        (promiseInProgress) ?
          <div className={props.className}>
            <CircularProgress/>
          </div>
          :
          <>{props.children}</>
      }
    </>
  )
};
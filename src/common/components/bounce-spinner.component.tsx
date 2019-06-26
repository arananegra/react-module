import * as React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import BounceLoader from 'react-spinners/BounceLoader';

interface Props {
  area: string;
  className?: any;
  children: React.ReactElement;
}

export const LoadingBounceSpinnerComponent = (props: Props) => {
  const {promiseInProgress} = usePromiseTracker({area: props.area});
  return (
    <>
      {
        (promiseInProgress) ?
          <div className={props.className}>
            <BounceLoader size={150}
                          color={'#123abc'}/>
          </div>
          :
          <>{props.children}</>
      }
    </>
  )
};
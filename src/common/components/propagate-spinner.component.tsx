import * as React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import { PropagateLoader } from "react-spinners";

interface Props {
  area: string;
  className?: any;
  children: React.ReactElement;
}

export const LoadingPropagateSpinnerComponent = (props: Props) => {
  const {promiseInProgress} = usePromiseTracker({area: props.area, delay: 500});
  return (
    <>
      {
        (promiseInProgress) ?
          <div className={props.className}>
            <PropagateLoader size={20}
                          color={'#123abc'}/>
          </div>
          :
          <>{props.children}</>
      }
    </>
  )
};
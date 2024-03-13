import React, {FC} from 'react';

type TInputComponentProps = {

}
export const InputComponent: FC<TInputComponentProps> = ({...rest}) => {
  return (
    <input {...rest} />
  );
};


import React, {FC} from 'react';

type TInputComponentProps = {
  children: React.ReactNode;
}
export const InputComponent: FC<TInputComponentProps> = ({children, ...rest}) => {
  return (
    <input {...rest} />
  );
};


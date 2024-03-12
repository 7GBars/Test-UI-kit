import React, {FC} from 'react';

export const InputComponent: FC<{}> = ({children, ...rest}) => {
  return (
    <input {...rest} />
  );
};


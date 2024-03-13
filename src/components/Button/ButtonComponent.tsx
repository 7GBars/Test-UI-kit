import React, {FC} from 'react';

type TButtonProps = {
  children: React.ReactNode;
  color: string;
  size?: 's' | 'm' | 'l';
}

export const ButtonComponent: FC<TButtonProps> = ({
                                   children,
                                   color,
                                   size,
                                   ...rest
                                 }) => {
  return (
    <button {...rest} style={{color}}>
      {children}
    </button>
  );
};



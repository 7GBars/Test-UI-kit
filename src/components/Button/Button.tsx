import React, {FC} from 'react';
import './buttonComponent.css';

type TButtonProps = {
  children: React.ReactNode;
  color?: string;
  size?: 's' | 'm' | 'l';
}

export const Button: FC<TButtonProps> = ({
                                   children,
                                   color = 'red',
                                   size,
                                   ...rest
                                 }) => {

  const sizeClass = `size__${size ?? 'm'}`;

  return (
    <button {...rest} style={{color}} className={sizeClass}>
      {children}
    </button>
  );
};



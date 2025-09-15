import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'btn',
        {
          'btn-primary': variant === 'primary',
          'btn-ghost': variant === 'ghost',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

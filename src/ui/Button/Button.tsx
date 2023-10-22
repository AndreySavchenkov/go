import React, {FC} from 'react';
import classNames from "classnames";
import classes from './Button.module.scss';

export enum ButtonTypeEnum {
  MAIN,
  SECONDARY,
  TEXT,
}

type ButtonPropsType = {
  children: React.ReactNode;
  type: ButtonTypeEnum;
  onClick?: () => void;
  className?: string;
};

const Button: FC<ButtonPropsType> = ({
                                       children,
                                       type = ButtonTypeEnum.MAIN,
                                       onClick,
                                       className
                                     }) => {
  return (
    <button className={classNames(className,
      classes.button,
      {[classes.button__main]: type === ButtonTypeEnum.MAIN},
      {[classes.button__secondary]: type === ButtonTypeEnum.SECONDARY},
      {[classes.button__text]: type === ButtonTypeEnum.TEXT}
    )} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
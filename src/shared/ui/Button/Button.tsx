import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  COLLAPSE = 'collapse'

}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  X = 'size_x'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  size?: ButtonSize

}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    size,
    ...otherProps
  } = props

  return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
  )
}

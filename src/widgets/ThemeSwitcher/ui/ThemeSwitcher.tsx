import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import DarkIcon from 'shared/assets/icons/btn-theme-dark.svg'
import LightIcon from 'shared/assets/icons/btn-theme-light.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon className={cls.ThemeSwitcher__dark} /> : <LightIcon />}
        </Button>
  )
}

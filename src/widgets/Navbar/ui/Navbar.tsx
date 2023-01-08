import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  return (
        <div data-testid='navbar'
            className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.Navbar__links}>
                {t('Logo')}
            </div>
            <div className={cls.Navbar__switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
  )
}

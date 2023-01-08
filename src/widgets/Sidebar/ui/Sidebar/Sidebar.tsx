import { classNames } from 'shared/lib/classNames/classNames'
import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutIcon from 'shared/assets/icons/people.svg'

interface SidebarProps {
  className?: string
}

export function Sidebar ({ className }: SidebarProps) {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.Sidebar__links}>

              <AppLink className={cls.Sidebar__link} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                  <HomeIcon className={cls.Sidebar__icon}/>
                  <span>
                         {t('Main')}
                  </span>
               </AppLink>

              <AppLink className={cls.Sidebar__link} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                  <AboutIcon className={cls.Sidebar__icon}/>
                  <span>{t('About us')}</span>
                  </AppLink>

      </div>
      <Button size={ButtonSize.L} theme={ButtonTheme.COLLAPSE} className={classNames(cls.Sidebar__btn)} data-testid="sidebar-toggle" onClick={onToggle}>{collapsed ? '>' : '<'}</Button>

    </div>
  )
}

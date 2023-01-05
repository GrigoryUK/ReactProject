import { classNames } from 'shared/lib/classNames/classNames'
import React, { useState } from 'react'
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export function Sidebar ({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed((prev) => !prev)
  }
  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <button data-testid="sidebar-toggle" onClick={onToggle}>toggle</button>

    </div>
  )
}

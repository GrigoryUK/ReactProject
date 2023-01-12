import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthModal, setIsAuthModal] = useState(false)
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])
  return (
        <div data-testid='navbar'
            className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.Navbar__links}>
                {t('Logo')}
            </div>
            <div className={cls.Navbar__switcher}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onToggleModal}>
                    {t('sign in')}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur deserunt dicta
                        dolorem ex facilis, illo molestias obcaecati quis, repellendus rerum sequi sunt temporibus
                        tenetur veritatis voluptas voluptatibus. Porro, repudiandae!
                    </div>
                </Modal>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
  )
}

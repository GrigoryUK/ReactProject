import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import {useTranslation} from "react-i18next";




interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={cls.Navbar__links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Main')}</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About us')}</AppLink>
            </div>
            <div className={cls.Navbar__switcher}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};




import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <h1>{t('Page not found')}</h1>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Main')}</AppLink>
        </div>
  )
}

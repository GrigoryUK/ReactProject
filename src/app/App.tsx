import { Suspense } from 'react'

import './styles/index.scss'

// смена темы
import { useTheme } from 'app/providers/ThemeProvider'

// Добовления классов
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App = () => {
  const { theme } = useTheme()

  return (
        <div className={classNames('app', { hovered: true, selected: true }, [theme])}>
            <Suspense fallback=''>
                <Navbar/>

                <div className='content-page'>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
  )
}

export default App

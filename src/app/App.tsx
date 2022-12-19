import {Suspense, useContext, useState} from "react";
import {Route, Routes, Link} from "react-router-dom";

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import './styles/index.scss';

// смена темы
import {useTheme} from "app/providers/ThemeProvider";

// Добовления классов
import {classNames} from "shared/lib/classNames/classNames";







const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme])}>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>O сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
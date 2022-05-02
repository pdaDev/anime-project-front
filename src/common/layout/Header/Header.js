import React, {useState} from "react";
import s from './Header.module.css'
import {HeaderButton} from "./HeaderButton";
import {Navigate} from "react-router-dom";
import {HeaderUserIcon} from "./HeaderUserIcon";
import asuka from '../../../assets/images/asuka.png'
import {ProfileMenu} from "./ProfileMenu/ProfileMenu";
import {AuthFormControl} from "../../../components/Auth/Form/AuthFormControl";
import {SearchMenu} from "../Search/SearchMenu";
import {HeaderSearchButton} from "./SearchButton/HeaderSearchButton";
import {AnimatedComponent} from "../../UI/Other/AnimatedComponent";
import {HeaderLink} from "./HeaderLink";
import {useSelector} from "react-redux";
export const Header = ({isAuth, userImg, setNovelties, setPopulars, userId, logout}) => {
    const [isAuthFormOpen, setAuthFormOpen] = useState(false)
    const toggleSetOpen = () => setAuthFormOpen(!isAuthFormOpen)
    const [isSearchMenuOpen, openSearchMenu] = useState(false)
    const toggleSearchMenu = () => openSearchMenu(!isSearchMenuOpen)
    const timeout = 500



    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false)

    return (
        <>
            <header  className={s.header_wrapper}>
                <nav className={s.nav_wrapper}>
                    <AnimatedComponent isOpen={!isSearchMenuOpen} timeout={200}>
                        <HeaderSearchButton handleClick={toggleSearchMenu}/>
                    </AnimatedComponent>
                    <HeaderLink link={'catalog'} clickHandle={setPopulars}>
                        Популярное
                    </HeaderLink>
                    <HeaderLink link={'catalog'} clickHandle={setNovelties}>
                        Новинки
                    </HeaderLink>
                    {isAuth
                        ?
                        <HeaderUserIcon onClick={() => setProfileMenuOpen(!isProfileMenuOpen)} src={userImg ?? asuka}/>
                        : <HeaderButton onClick={toggleSetOpen}>
                            Вход
                        </HeaderButton>
                    }
                </nav>
            </header>
            {isProfileMenuOpen && isAuth && <ProfileMenu logout={logout} profileId={userId} profileMenuClose={() => setProfileMenuOpen(false)}/>}
            {isAuthFormOpen && !isAuth && <AuthFormControl type='SIGN-IN' toggleSetOpen={toggleSetOpen}/>}
            {isSearchMenuOpen && <SearchMenu handleExit={toggleSearchMenu}/>}
        </>

    )
}
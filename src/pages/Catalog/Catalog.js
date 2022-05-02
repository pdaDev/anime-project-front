import React from "react";
import Header from "../../common/layout/Header/Header.container";
import {Footer} from "../../common/layout/Footer/Footer";
import s from './Catalog.module.css'
import {CatalogTitle} from "../../components/Сatalog/Title/CatalogTitle";
import {CatalogGenresList} from "../../components/Сatalog/GenresList/CatalogGenresList";
import {CatalogWrapper} from "../../components/Сatalog/CatalogWrapper/CatalogWrapper";
import {CatalogList} from "../../components/Сatalog/CatalogList/CatalogList";
import {Layout} from "../../common/layout/Layout";
import CatalogFilterForm from "../../components/Сatalog/FilterForm/CatalogFilterForm.container";
import {EmptyButton} from "../../common/UI/Button/EmptyButton.styles";
import {AddCatalogItemsButton} from "../../common/UI/Button/AddButton/addCatalogIemsButton";
import loader from './../../assets/icons/Ellipsis-1s-200px.svg'
import {Preloader} from "../../common/UI/Preloader/Preloader";

export const Catalog = ({items, title, selectedData: {genres}, addItems, isFetching}) => {

    return (
            <CatalogWrapper>
                <div style={{marginLeft: '200px'}}>
                    <CatalogTitle title={title}/>
                </div>
                {genres.length > 0 && <CatalogGenresList  genres={genres}/>}
                <CatalogList addItems={addItems} items={items}/>
                <AddCatalogItemsButton handleClick={addItems}/>
                {isFetching && <Preloader/>}
                <CatalogFilterForm
                />
            </CatalogWrapper>

    )
}



import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import middlewareThunk from 'redux-thunk'
import {AuthReducer} from "./Auth/Auth.reducer";
import {CatalogReducer} from "./Catalog/Catalog.reducer";
import {ProfileReducer} from "./Profile/Profile.reducer";
import {AppReducer} from "./App/App.reducer";
import {ContentAnimeReducer} from "./Content/Anime/ContentAnime.reducer";
import {CatalogFilterReducer} from "./Catalog/Filter/CatalogFilter.reducer";
import {MangaReducer} from "./Content/Manga/ContentManga.reducer";
import {ReaderReducer} from "./Reader/Reader.reducer";
const  reducers  = combineReducers({
    auth: AuthReducer,
    catalog: CatalogReducer,
    profile: ProfileReducer,
    app: AppReducer,
    anime: ContentAnimeReducer,
    catalogFilter: CatalogFilterReducer,
    manga: MangaReducer,
    reader: ReaderReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(middlewareThunk)))
window.store = store

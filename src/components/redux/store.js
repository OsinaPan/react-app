//import { legacy_createStore as createStore} from 'redux'
//import shortid from 'shortid';
//import { strContains } from '../utils/strContains';
import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardRedux';
import searchStringReducer from './searchStringRedux';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

/*
export const getFilteredCards = ({cards, searchString},  columnId) => 
cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

export const addCollumn = (payload) => ({type: 'ADD_COLUMN', payload});

export const addCard = (payload) => ({type: 'ADD_CARD', payload})

export const searchString = (payload) => ({type: 'SEARCHSTRING', payload})

export const getListById = ({lists}, listId) =>lists.find(list=>list.id===listId);

export const getColumnsByList = ({columns}, listId ) => columns.filter(column => column.listId === listId);

export const getFavoriteCard = (state) => state.cards.filter(card => card.isFavorite === true); 

export const getAllLists = (state) => state.lists;

export const getSearchString = (state => state.searchString);

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload });

export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload }); 

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { id: shortid(), ...action.payload }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, {id: shortid(),...action.payload}]};
    case 'SEARCHSTRING':
      return { ...state, searchString: action.payload};
    default:
      return state;
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) };
  }
};
*/
const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
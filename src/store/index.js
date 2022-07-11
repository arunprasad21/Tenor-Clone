import {createStore} from 'redux';

const queryReducer = (state = {query: ""},action) => {
    if(action.type === "searchQuery"){
        return{
            query : action.updatedQuery
        }
    }
    return state;
}

const store = createStore(queryReducer);

export default store;
import {createStore} from 'redux';


const localStorageQuery = localStorage.getItem("query");
const queryReducer = (state = {query:localStorageQuery},action) => {
    if(action.type === "searchQuery"){
        return{
            query : action.updatedQuery
        }
    }
    return state;
}

const store = createStore(queryReducer);

export default store;
import  * as actionTypes from './actionTypes.js'

export default function changeCategoryReducer(state = categories, action){
    switch(action.types){
        case actionTypes.CHANGE_CATEGORY_SUCCESS:
            return action.payload
            default :
            return state
    }
}     
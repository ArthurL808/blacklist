import { LOGIN } from '../actions/index'

const initialState ={
    id: 0,
    email: '',
    company_name: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {
                ...state,state:action.payload
            }
            default:
                return state
    }
}

export default userReducer
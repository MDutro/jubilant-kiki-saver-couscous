import { createStore } from 'redux'

function signup(state={}, action) {
    switch (action.type) {
        case 'CREATE':
            return Object.assign({}, state, {
                ...action.signUpForm
            })
            break;
    
        default:
            break;
    }
}

const SignupStore = createStore(signup)

export default SignupStore
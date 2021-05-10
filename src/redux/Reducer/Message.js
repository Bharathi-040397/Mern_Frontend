import ACTIONS from '../Action'

export const INITIAL_STATE = {
    error: "",
    success :""
}

const Message = (state = INITIAL_STATE, action) => {
    switch (action.type)
    {
        case ACTIONS.SHOW_ERR_MESSAGE:
            return {
                ...state,
                error:action.payload
            }
        case ACTIONS.SHOW_SUCCESS_MESSAGE:
            return {
                ...state,
                success:action.payload
            }
        case ACTIONS.CLEAR_MESSAGE:
            return {
                ...state,
                success: "",
                error: "",
                loading:false

            }
        default:
          return state

    }
}


export default Message
import ACTIONS from '../Action'


export const clearMessage = () =>async dispatch => {
    dispatch({
          type:ACTIONS.CLEAR_MESSAGE,
    })
    
}
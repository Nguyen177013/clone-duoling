import * as constants from "./constants";

export const initState = {
    user: null,
};

export function reducer (state, action){
    switch(action.type){
        case constants.LOGIN_AUTH:
            return {
                user:action.payload
            }
        case constants.LOGOUT_AUTH:
            return{
                user:null
            }
        default:
            throw Error("Invalid action");
    }
}
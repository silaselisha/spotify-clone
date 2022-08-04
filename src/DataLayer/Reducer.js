export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_WEEKLY_DISCOVERY':
            return {
                ...state,
                discovery: action.discovery
            }
        default:
            return state;
    }
}

export default reducer
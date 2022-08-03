export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQD9lbiy4b3TXbm0e3NhwSa1tKQE_I7H2cM30iCBehCnN5aCSq7MY9hNXPVu5RT-veFa-9VPieyVSQb_RSfbk0x--SGG2NoU3mo20zYQ-Lx1cfZVz51D6hDpjDjFSj7y7RTcnsBTK8Jw7TZegEim6ymhU4USzGjhvTTkpFd_-9FZzwaNndvn1fW_puvtEOksNtAO4X565l8ZLYjxw578x0eDLwZHHpvCmU-29stW3yP-8NEGBloT2v6krPgnYyFKxIU5NRGghlNqPGj6D2d5OeoBZdg'
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
        default:
            return state;
    }
}

export default reducer
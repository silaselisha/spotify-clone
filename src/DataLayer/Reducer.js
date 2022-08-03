export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: 'BQB9aa2C_BzQPWi2X4E0U4Yvc36RFTQl2nPGi-aBLH-_GFQoPo1zRPYvWKfhmBTJQxDS5eW6Y3ywgJnz9pMQvh2ZUjtAK3wIfY8zQG_O4HpG8euLv56GAYGQbZ20mQpEiEUhQcoY2-RiL9Ru3bqgNU-_2jNmXHjKnPa8fNKpHTgAlqPPTA38neKwQfk_7vg_uuRpk6P5A5GOb1Y3dOg'
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
        default:
            return state;
    }
}

export default reducer
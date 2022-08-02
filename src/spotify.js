const redirect_uri = 'http://localhost:3000/'
export const auth_url = 'https://accounts.spotify.com/authorize/'
const client_id = '63628aff5910469da42b52f66d24420d'


const scopes = [
    'user-modify-playback-state',
    'user-read-playback-state',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-position',
    'user-top-read'
]

export const URL = `${auth_url}?client_id=${client_id}&scope=${scopes.join('%20')}&redirect_uri=${redirect_uri}&response_type=token&show_dialog=true`

export const getAccessToken = () => {
    return window.location.hash.substring(1).split('&').reduce((previous, current) => {
        let items = current.split('=')
        previous[items[0]] = decodeURIComponent(items[1])

        return previous
}, {})
}

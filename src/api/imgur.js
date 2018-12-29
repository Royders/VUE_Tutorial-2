import qs from 'qs'
import axios from 'axios'

const CLIENT_ID = '754c2a21b7f8dba'
const CLIENT_SECRET = '8065c0d49e6527636897aadbd6a0c1b0d5199424'
const IMGUR_URL = 'https://api.imgur.com'

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
       window.location = `${IMGUR_URL}/oauth2/authorize?${qs.stringify(queryString)}`
    },
    fetchImages(token){
        return axios.get(`${IMGUR_URL}/3/account/me/images`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}
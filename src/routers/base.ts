import {Login} from '@/pages'
export const baseUrL = {
    login: '/'
}
const baseRouters = [
    {
        path: baseUrL.login,
        component: Login,
        root: [],
        auth: false
    }
]
export default baseRouters
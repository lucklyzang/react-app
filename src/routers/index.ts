import {
    Home,
    ErrorPage
} from '@/pages'
import   baseRouters from '@/routers/base'
export interface RouterType  {
    path: string,
    component: React.LazyExoticComponent<any>,
    root: string[],
    notExect?: boolean,
    auth?: boolean
}

const HomeRouter: RouterType = {
    path: '/home',
    component: Home,
    root: [],
    auth: true
}

const ErrorRouter: RouterType = {
    path: '/404',
    component: ErrorPage,
    root: [],
    auth: false,
    
}
// 总路由
const Routers: RouterType[] = ([
    HomeRouter,
    ErrorRouter,
    ...baseRouters
])

export {
    Routers
}
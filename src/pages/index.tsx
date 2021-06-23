import { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))
const ErrorPage = lazy(() => import('@/pages/errorPage'))
export {
  Home,
  Login,
  ErrorPage
}
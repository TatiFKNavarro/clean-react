import React from 'react'
import { useRecoilValue } from 'recoil'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { currentAccountState } from '@/presentation/components'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute

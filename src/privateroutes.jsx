import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = useSelector(state => state.authentication)

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        isAuthenticated && isAuthenticated.isLoggedIn ? (
          children
        ) : (
          <>
            <Redirect
              to={{
                pathname: '/',
                state: { from: location, mode: 'restricted' },
              }}
            />
          </>
        )
      }
    />
  )
}

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

export default function requireAuth(ChildComponent) {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();
    const { auth } = props

    const shouldNavigateAway = () => {
      if (!auth) {
        navigate('/')
      }
    }
  
    useEffect(() => {
      shouldNavigateAway()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth])

    return <ChildComponent {...props} />
  }

  function mapState(state) {
    return { auth: state.auth.authenticated }
  }

  return connect(mapState, actions)(ComposedComponent)
}
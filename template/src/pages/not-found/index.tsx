import React from 'react'
import { useRouteError } from 'react-router-dom'
import { IProps } from './types'

const NotFound: React.FC<IProps> = () => {
  const err = useRouteError() as any
  return <div>{err.message}</div>
}

export default NotFound

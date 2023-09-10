import React from 'react'
import { AdminHeaderTitleDiv } from './style'

export default function AdminHeaderTitle({title="Dashboard"}) {
  return (
    <AdminHeaderTitleDiv>
      <p>Welcome, Posh Retreats</p>
      <h3>{title}</h3>
    </AdminHeaderTitleDiv>
  )
}

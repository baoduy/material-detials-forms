import React from 'react'
import { Link, Router, Routes } from 'docz'

import Theme from 'docz-theme-default'

import { imports } from './imports'
import database from './db.json'
import Wrapper from 'wrapper/index.tsx'

const Root = () => {
  return (
    <Theme wrapper={Wrapper} linkComponent={Link} db={database}>
      <Routes imports={imports} />
    </Theme>
  )
}

export default Root

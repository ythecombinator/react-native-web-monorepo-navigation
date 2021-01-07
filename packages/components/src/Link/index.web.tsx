import React, { ReactChild } from 'react'

import { stringify } from 'query-string'
import { Link as DOMLink } from 'react-router-dom'

import { LinkProps } from './Link.models'

const Link = (props: LinkProps) => {
  const { path, params: qsParams = {} } = props

  const params = `?${stringify(qsParams)}`

  return (
    <DOMLink to={{ pathname: path, search: params }}>{props.children}</DOMLink>
  )
}

export { Link }

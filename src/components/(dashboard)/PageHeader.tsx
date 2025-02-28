import React from 'react'

type Props = {
    label: string;
    message: string;
}

const PageHeader = (props: Props) => {
  return (
      <div>PageHeader { props.label }</div>
  )
}

export default PageHeader
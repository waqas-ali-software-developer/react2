import React from 'react'
type Props = {
  link: string,
  icon: string,
}

const ExternalLinkIcon = ({ link, icon }: Props) => {
  return (
    <a href={link} target="_blank">
      <i className={icon}></i>
    </a>
  )
}
/*
const ExternalLinkIcon = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}
*/

export default ExternalLinkIcon
import React from 'react'
import PropTypes from 'prop-types'

const Preloader = (props) => {
  const {loader, className, children} = props
  if (loader) {
    return (
      <div className={`${className || ''} preloader`}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="32px" height="32px" viewBox="0 0 128 128">
          <rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" />
          <g>
            <circle cx="16" cy="64" r="16" fill="#2a2a2a"/>
            <circle cx="16" cy="64" r="14.344" fill="#2a2a2a" transform="rotate(45 64 64)"/>
            <circle cx="16" cy="64" r="12.531" fill="#2a2a2a" transform="rotate(90 64 64)"/>
            <circle cx="16" cy="64" r="10.75" fill="#2a2a2a" transform="rotate(135 64 64)"/>
            <circle cx="16" cy="64" r="10.063" fill="#2a2a2a" transform="rotate(180 64 64)"/>
            <circle cx="16" cy="64" r="8.063" fill="#2a2a2a" transform="rotate(225 64 64)"/>
            <circle cx="16" cy="64" r="6.438" fill="#2a2a2a" transform="rotate(270 64 64)"/>
            <circle cx="16" cy="64" r="5.375" fill="#2a2a2a" transform="rotate(315 64 64)"/>
            <animateTransform attributeName="transform" type="rotate" values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64" calcMode="discrete" dur="800ms" repeatCount="indefinite"/>
          </g>
        </svg>
      </div>
    )
  }
  if (!loader) return children
}

Preloader.propTypes = {
  loader: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node
}

export default React.memo(Preloader)
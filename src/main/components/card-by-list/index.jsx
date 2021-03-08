import React from 'react'
import PropTypes from 'prop-types'

const CardByList = (props) => {
  const {data} = props
  return (
    <div className="card-by-list">
      <div className="card-by-list__marker">{data.category}</div>
      <div className="card-by-list__title">{data.title}</div>
      <div className="card-by-list__img"><img src={data.img} alt="img"/></div>
      <div className="card-by-list__bottom">
        <div className="card-by-list__date">{data.date}</div>
        <div className="card-by-list__actions-list">
          <div className="card-by-list__actions-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M21 9.71429C21 14.7634 12 20 12 20C12 20 3 14.7634 3 9.71429C3 9.58343 3 9.208 3 9.14286C3 6.30229 5.26631 4 8.0625 4C9.65325 4 11.0719 4.74686 11.9989 5.91257C12.927 4.74686 14.3462 4 15.9375 4C18.7337 4 21 6.30229 21 9.14286C21 9.20743 21 9.58286 21 9.71429Z" stroke="#CDD9E9" strokeWidth="1.5"/>
            </svg>
            {data.like_count}
          </div>
          <div className="card-by-list__actions-item">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.9999 19.116C6.90193 19.116 2.76918 15.6633 2.76918 11.4042C2.76918 7.14508 6.90193 3.69238 11.9999 3.69238C17.098 3.69238 21.2307 7.14508 21.2307 11.4042C21.2307 12.5746 20.7237 14.3956 19.8877 15.5473C18.8034 17.0408 17.2496 17.9769 17.2496 17.9769C17.2496 17.9769 17.2389 18.4557 17.4153 19.116C17.5917 19.7763 17.9654 20.2413 17.9654 20.2413C17.9654 20.2413 16.9641 20.5194 15.7511 19.9377C14.8901 19.5249 14.1139 18.9128 14.1139 18.9128C14.1139 18.9128 12.7273 19.116 11.9999 19.116Z" stroke="#CDD9E9" strokeWidth="1.5"/>
            </svg>
            {data.view_count}
          </div>
          <div className="card-by-list__actions-item">
            <a href={data.more} target="_blank" rel="noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.235 11.4149H17.5511C18.3193 11.4149 18.942 11.9584 18.942 12.6298V19.7852C18.942 20.4561 18.3158 21.0001 17.5478 21.0001H6.3941C5.62409 21.0001 4.99988 20.4565 4.99988 19.7852V12.2238C4.99988 11.5528 5.62095 11.4149 6.39214 11.4149H8.71051" stroke="#CDD9E9" strokeWidth="1.5"/>
                <path d="M11.9709 4.92853V17.1279" stroke="#CDD9E9" strokeWidth="1.5" strokeLinecap="square"/>
                <path d="M7.04165 7.92927L11.9234 4.01771L16.9002 7.92927" stroke="#CDD9E9" strokeWidth="1.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

CardByList.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  date: PropTypes.string,
  view_count: PropTypes.number,
  comment_count: PropTypes.number,
  like_count: PropTypes.number,
  more: PropTypes.string,
}

export default React.memo(CardByList)
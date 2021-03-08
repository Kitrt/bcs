import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import CardByList from '../card-by-list'
import Preloader from '../preloader'

const ListByCategory = (props) => {
  const {data, onNextPage} = props
  const [renderArray, setRenderArray] = useState([])

  useEffect(() => {
    if (data) {
      const RENDER_LIST = []
      let showItems = data['page'] * 3

      for (let key in data['data']) {
        const {
          article_url, comment_count, id, like_count, publish_date,
          rubric, small_image_url, title, view_count
        } = data['data'][key]
        if (showItems <= key) break
        RENDER_LIST.push({
          id: id,
          category: rubric,
          title: title,
          date: publish_date,
          img: small_image_url,
          view_count: view_count,
          comment_count: comment_count,
          like_count: like_count,
          more: article_url,
        })
      }
      setRenderArray(RENDER_LIST)
    }
  }, [data])

  return (
    <div className="list-by-category">
      <Preloader loader={!data || data.preload}>
        <React.Fragment>
          <div className="list-by-category__wrapper">
            {renderArray.map((props) => <CardByList key={props.id} data={props}/>)}
          </div>
          {data && (Math.ceil(data['data'].length / 3) > data['page'] && Math.ceil(data['data'].length / 3) !== data['page']) &&
          <div className="list-by-category__btn">
            <button type="button" onClick={() => onNextPage(++data['page'])}>Смотреть ещё</button>
          </div>
          }
        </React.Fragment>
      </Preloader>
    </div>
  )
}

ListByCategory.propTypes = {
  data: PropTypes.object,
  onNextPage: PropTypes.func
}

export default React.memo(ListByCategory)
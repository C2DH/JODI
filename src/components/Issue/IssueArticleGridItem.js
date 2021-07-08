import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ArticleFingerprint from '../Article/ArticleFingerprint'
import LangLink from '../LangLink'
import {useBoundingClientRect} from '../../hooks/graphics'
import { useGetJSON } from '../../logic/api/fetchData'
import { StatusSuccess } from '../../constants'

const IssueArticleGridItem = ({ article={}, isFake=false }) => {
  const [{width: size }, ref] = useBoundingClientRect()
  return (
    <div className="IssueArticleGridItem mt-5" ref={ref}>
      <LangLink to={isFake ? '#' : `/article/${article.abstract.pid}`}>
        <div className="squared  position-relative" style={{
          backgroundColor: 'var(--white)',
          overflow: 'hidden'
        }}>
          <ArticleFingerprint radius={(size - 40)/2}/>
        </div>
        <h3 className="d-block mt-3 pb-0">
          {article.abstract.title}
        </h3>
        <p>{article.status}</p>
      </LangLink>
    </div>
  )
}


export default IssueArticleGridItem
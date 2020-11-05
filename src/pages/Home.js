// import React, { useEffect, useState } from 'react'
import React from 'react'
// import LangLink from '../components/LangLink'
import { useTranslation } from 'react-i18next'
import { Container, Row, Col } from 'react-bootstrap'
// import { useStore } from '../store'
import homePageContents from '../data/mock-api/mock-home-ipynb.json'
import {getArticleTreeFromIpynb} from '../logic/ipynb'
import ArticleCell from '../components/ArticleText/ArticleCell'




const articleTree = getArticleTreeFromIpynb(homePageContents)
const journalCells = articleTree.paragraphs.filter(({ metadata }) => metadata['jdh.section'] === 'journal')
const editorialBoardCells = articleTree.paragraphs.filter(({ metadata }) => metadata['jdh.section'] === 'editorial-board')
const callForPapers = articleTree.paragraphs.filter(({ metadata }) => metadata['jdh.section'] === 'call-for-papers')

console.info(articleTree, homePageContents)

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
    <Container className="page">
      <Row>
        <Col md={{offset:2}}>
          <h1 className="my-5">Write (digital) history</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{span:4, offset:2}}>
        {journalCells.map((props, i) => (
          <ArticleCell key={i} {...props} idx={i+1}/>
        ))}
        </Col>
        <Col md={{span:4, offset:1}}>
        <div className="border border-dark p-4" style={{
          position: 'sticky',
          top: '120px'
        }}>
        <h2 className="mb-4">{t('pages.home.callForPaper')}</h2>
        {callForPapers.map((props, i) => (
          <ArticleCell key={i} {...props} idx={i+1} hideIdx />
        ))}
        </div>
        </Col>
      </Row>
      <Row>
        <Col md={{offset:2}}>
          <h2 className="my-5">{t('pages.home.editorialBoardMembers')}</h2>
        </Col>
      </Row>
      <Row>
        {editorialBoardCells.map((props, i) => (
          <Col key={i} md={{span:4, offset: i % 2 === 0 ? 2 : 1}}>
          <ArticleCell {...props} idx="▲"/>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={{offset:2}}>
          <h2 className="my-5">{t('pages.home.journalRoadmap')}</h2>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home
//     <div className="page">
//       <Container>
//       <Row>
//         <Col md={{span:8, offset:4}} lg={{span:6, offset:3}}>
//         <h1 className="display-3 m-0">Make <i>History</i><br/> Awesome Again</h1>
//         <h2><LangLink to='/submit' style={{color: 'var(--secondary)', textDecoration: 'underline'}}>submit a paper &rarr;</LangLink></h2>
//         </Col>
//       </Row>
//       </Container>
//       <div>
//         <div style={{ position: 'sticky', top: '50vh', marginTop:'-50px', zIndex: 1}}>
//           <div className="position-absolute animate-transform w-100" style={{
//             transform: `translate(0, ${stepTitleSlide}px`}}>
//             <Container>
//             <Row>
//               <Col md={{span:4, offset:0}} lg={{span:3, offset:0}}>
//             {STEPS.map(({ title, backgroundColor}, stepIndex) => (
//               <div key={stepIndex} className="position-absolute" style={{
//                 height: `${stepSize}px`,
//                 opacity: stepIndex === currentStepIndex ? 1 : .5,
//                 top: `${stepSize*stepIndex}px`,
//               }}>
//                 <h2 className="p-2">{t(title)}</h2>
//               </div>
//             ))}
//               </Col></Row>
//               </Container>
//           </div>
//         </div>
//         <Scrollama className="pt-5" onStepEnter={onStepEnter} onStepProgress={onStepProgress} threshold={0} offset={0.5}>
//         {STEPS.map((step, stepIndex) => (
//           <Step data={stepIndex} key={stepIndex}>
//             <div
//               style={{
//                 minHeight: '60vh',
//                 paddingTop: '10vh',
//                 paddingBottom: '10vh',
//                 opacity: currentStepIndex === stepIndex ? 1 : 0.2,
//               }}
//             >
//               <Container>
//                 <Row>
//                   <Col md={{span:8, offset:4}} lg={{span:6, offset:3}}>
//                     <h3 dangerouslySetInnerHTML={{ __html: step.subheading }} />
//                   </Col>
//                 </Row>
//                 {step.paragraphs.map(paragraph => (
//                   <Row>
//                     <Col md={{span:8, offset:4}} lg={{span:6, offset:3}}>
//                       <p className="serif lead my-3" dangerouslySetInnerHTML={{ __html: paragraph.text }}/>
//                     </Col>
//                   </Row>
//                 ))}
//               </Container>
//             </div>
//           </Step>
//         ))}
//       </Scrollama>
//       </div>
//     </div>
//   );
// };
// <ScrollableGallery
//   id='latestIssues'
//   offsetTop='70px'
//   title={t('pages.home.latestIssues')}
//   steps={issues?.results}
//   stepComponent=''/>

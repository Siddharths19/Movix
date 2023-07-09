import React from 'react'
import "./ePageNotFound.scss"
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const ePageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  )
}
export default ePageNotFound
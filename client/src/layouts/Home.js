import React from 'react'
import { Link } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import { Trans } from 'react-i18next'

import styled from 'styled-components'

const CTALink = styled(Link)`
  &:hover i {
    padding-left: 20px;
  }
  & i {
    padding-left: 5px;
    transition: all 0.5s ease;
  }
  background-color: #bf215b;
  border-color: #bf215b;
`

const Home = () => {
  const { t } = useTranslation('home')

  return (
    <header className="fdb-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-12 m-auto mr-lg-0 ml-lg-auto pt-5 pt-lg-0 d-lg-block d-none">
            <img alt="Background" className="img-fluid" src="/img/background.jpg" />
          </div>
        </div>
        <div className="row align-items-center" style={{marginTop: 30}}>
          <div className="col-12 col-lg-12 col-xl-12">
            <h2>{t('leadTitle')}</h2>
            <p className="mt-4">
              <CTALink className="btn btn-secondary" to="/report">
                {t('ctaCheckSymptoms')}
                <i className="fas fa-arrow-right ml-1"></i>
              </CTALink>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Home

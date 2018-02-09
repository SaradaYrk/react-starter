import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import ja from 'react-intl/locale-data/ja'
import en from 'react-intl/locale-data/en'
import jpn from './jpn'
import eng from './eng'

addLocaleData([...ja, ...en])
// // もっとたくさんの言語が必要な場合
// // addLocaleData([...ja, ...fr, ...es])

export class Impact extends Component {
  componentDidMount () {
    this.props.loadValue()
  }

  // translate () {
  //   if (id === jpn) {
  //     this.state.locale
  //   }
  // }

  render () {
    // console.log('props', this.props)
    return (
      // <IntlProvider
      //   locale={'ja'}
      //   messages={jpn}
      // >
      <IntlProvider
        locale={'en'}
        messages={eng}
      >
        <div className='impact'>
          <button className='transBtn' onClick={this.translate} id='jpn'>
            日本語
          </button>
          <button className='transBtn' onClick={this.translate} id='eng'>
            English
          </button>
          <h2 className='impact-h2'>
            <FormattedMessage
              id='title'
            />
          </h2>
          <div className='impact-div'>
            <h5>CVSS Severity (version 3.0):</h5>
            <dl>
              <dt>CVSS v3 Base Score: {this.props.impact.v3baseScore}</dt>
              <dt>Vector: {this.props.impact.v3vector}</dt>
              <dt>Impact Score: {this.props.impact.v3impactScore}</dt>
              <dt>Exploitability Score: {this.props.impact.v3exploitabilityScore}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5>CVSS Version 3 Metrics:</h5>
            <dl>
              <dt>Attack Vector (AV): {this.props.impact.av}</dt>
              <dt>Attack Complexity (AC) {this.props.impact.ac}:</dt>
              <dt>Privileges Required (PR) {this.props.impact.pr}:</dt>
              <dt>User Interaction (UI): {this.props.impact.ui}</dt>
              <dt>Scope (S): {this.props.impact.s}</dt>
              <dt>Confidentiality (C): {this.props.impact.c}</dt>
              <dt>Integrity (I): {this.props.impact.i}</dt>
              <dt>Availability (A): {this.props.impact.a}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5>CVSS Severity (version 2.0):</h5>
            <dl>
              <dt>CVSS v2 Base Score: {this.props.impact.v2baseScore}</dt>
              <dt>Vector: {this.props.impact.v2vector}</dt>
              <dt>Impact Subscore: {this.props.impact.v2impactScore}</dt>
              <dt>Exploitability Subscore: {this.props.impact.v2exploitabilityScore}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5>CVSS Version 2 Metrics:</h5>
            <dl>
              <dt>Access Vector: {this.props.impact.accessVecotr}</dt>
              <dt>Access Complexity: {this.props.impact.accessCompexity}</dt>
              <dt>Authentication: {this.props.impact.authentication}</dt>
              <dt>Impact Type {this.props.impact.impactType}</dt>
            </dl>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

Impact.propTypes = {
  loadValue: PropTypes.func,
  impact: PropTypes.object
}

export default Impact

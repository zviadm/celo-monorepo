import { GitClient } from '@tinacms/git-client'
import App from 'next/app'
import getConfig from 'next/config'
import * as React from 'react'
import { View } from 'react-native'
import config from 'react-reveal/globals'
import scrollIntoView from 'scroll-into-view'
import { canTrack } from 'src/analytics/analytics'
import Header from 'src/header/Header.3'
import { ScreenSizeProvider } from 'src/layout/ScreenSize'
import Footer from 'src/shared/Footer.3'
import { HEADER_HEIGHT } from 'src/shared/Styles'
import { Tina, TinaCMS } from 'tinacms'
import Sentry, { initSentry } from '../fullstack/sentry'
import { appWithTranslation } from '../src/i18n'

config({ ssrReveal: true })
class MyApp extends App {
  cms: TinaCMS

  constructor(p, s) {
    super(p, s)
    this.cms = new TinaCMS()
    const client = new GitClient('http://localhost:3000/___tina')
    this.cms.registerApi('git', client)
  }
  componentDidMount() {
    if (canTrack()) {
      initSentry()
    }
    if (window.location.hash) {
      hashScroller(window.location.hash)
    }

    window.addEventListener('hashchange', () => hashScroller(window.location.hash))

    if (getConfig().publicRuntimeConfig.FLAGS.ENV === 'development') {
      checkH1Count()
    }
  }

  // there are a few pages we dont want the header on
  // currently this is just the animation demo pages and brand kit
  skipHeader() {
    return this.props.router.asPath.startsWith('/animation') || this.isBrand()
  }

  isBrand = () => {
    return this.props.router.asPath.startsWith('/experience')
  }

  componentDidCatch = (error: Error, info: object) => {
    Sentry.withScope((scope: Sentry.Scope) => {
      scope.setExtras(info)
      Sentry.captureException(error)
    })
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Tina cms={this.cms} position="overlay">
        <ScreenSizeProvider>
          {this.skipHeader() || <Header />}
          <Component {...pageProps} />
          {this.skipHeader() || (
            <View>
              <Footer />
            </View>
          )}
        </ScreenSizeProvider>
      </Tina>
    )
  }
}

export default appWithTranslation(MyApp)

function checkH1Count() {
  setTimeout(() => {
    if (document.getElementsByTagName('h1').length > 1) {
      console.warn(
        'To many h1 tags on page. This decreases search rank, please limit to 1 per page',
        Array.from(document.getElementsByTagName('h1')).map((el) => el.innerText)
      )
    }
  }, 500)
}

function hashScroller(id: string) {
  const element = document.getElementById(id.replace('#', ''))

  scrollIntoView(element, { time: 100, align: { top: 0, topOffset: HEADER_HEIGHT + 100 } })
}

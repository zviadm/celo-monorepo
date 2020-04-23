// import { isLocaleRTL } from '../server/i18nSetup'
import { StyleSheetServer } from 'aphrodite'
import Document, { DocumentContext, Head, Main, NextScript } from 'next/document'
import * as React from 'react'
// import { AppRegistry, I18nManager } from 'react-native-web'
import { setDimensionsForScreen } from 'src/layout/ScreenSize'
import { getSentry } from 'src/utils/sentry'

interface NextReq {
  locale: string
}

interface Props {
  locale: string
}

interface PropContext {
  req: DocumentContext['req'] & NextReq
}

export default class MyDocument extends Document<Props> {
  static async getInitialProps(context: DocumentContext & PropContext) {
    const locale = context.req.locale
    const userAgent = context.req.headers['user-agent']
    setDimensionsForScreen(userAgent)

    if (context.err) {
      const Sentry = await getSentry()
      Sentry.captureException(context.err)
    }

    // @ts-ignore
    const { html, css } = StyleSheetServer.renderStatic(() => context.renderPage())
    const ids = css.renderedClassNames
    return { html, css, ids, pathname: context.pathname, locale }

    // return { ...page, locale, styles: React.Children.toArray(styles), pathname: context.pathname }
  }

  render() {
    const { locale } = this.props
    return (
      <html lang={locale} style={{ height: '100%', width: '100%' }}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href={'/normalize.css'} />
          <style dangerouslySetInnerHTML={{ __html: this.props.css.content }} data-aphrodite="" />

          <link
            rel="stylesheet"
            href="https://indestructibletype.com/fonts/Jost.css"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=EB+Garamond:400,500,500i,700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

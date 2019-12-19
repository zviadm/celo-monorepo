import * as React from 'react'
import { Text, View } from 'react-native'
import { brandStyles } from 'src/brandkit/common/constants'
import Page, { ROOT } from 'src/brandkit/common/Page'
import { H1, H4 } from 'src/fonts/Fonts'

import { fonts, standardStyles } from 'src/styles'
import { useCMS, useLocalForm, useWatchFormValues } from 'tinacms'

export default function ExamplePage(props) {
  // grab the instance of the CMS to access the registered git API
  const cms = useCMS()

  // add a form to the CMS; store form data in `post`
  const [post, form] = useLocalForm({
    id: props.fileRelativePath,
    label: 'Edit Post', // needs to be unique
    // starting values for the post object
    initialValues: { title: props.title, headline: props.headline },
    // field definition
    fields: [
      { name: 'title', label: 'Title', component: 'text' },
      { name: 'headline', label: 'Headline', component: 'text' },
    ], // save & commit the file when the "save" button is pressed
    onSubmit(data) {
      return cms.api.git
        .writeToDisk({
          fileRelativePath: props.fileRelativePath,
          content: JSON.stringify({ title: data.title, headline: data.headline }),
        })
        .then(() => {
          return cms.api.git.commit({
            files: [props.fileRelativePath],
            message: `Commit from Tina: Update ${data.fileRelativePath}`,
          })
        })
    },
  })

  const writeToDisk = React.useCallback((formState) => {
    cms.api.git.writeToDisk({
      fileRelativePath: props.fileRelativePath,
      content: JSON.stringify({
        title: formState.values.title,
        headline: formState.values.headline,
      }),
    })
  }, [])

  useWatchFormValues(form, writeToDisk)

  return (
    <>
      <Page
        title="Home"
        path={ROOT}
        metaDescription={'test'}
        sections={[
          {
            id: 'overview',
            children: <Overview title={post.title} introduction={post.headline} text="x" />,
          },
        ]}
      />
    </>
  )
}

ExamplePage.getInitialProps = function getInitialProps(ctx) {
  const { slug } = ctx.query
  const content = require(`../../posts/example.json`)

  return {
    slug,
    fileRelativePath: `../../packages/web/posts/example.json`,
    title: content.title,
    headline: content.headline,
  }
}

function Overview({ title, introduction, text }) {
  return (
    <View style={brandStyles.gap}>
      <H1 style={standardStyles.elementalMarginBottom}>{title}</H1>
      <H4 style={standardStyles.blockMarginBottom}>{introduction}</H4>
      <Text style={[fonts.h5, standardStyles.elementalMarginBottom]}>{text}</Text>
    </View>
  )
}

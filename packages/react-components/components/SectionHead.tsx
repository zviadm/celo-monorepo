import colors from '@celo/react-components/styles/colors'
import fontStyles from '@celo/react-components/styles/fonts'
import variables from '@celo/react-components/styles/variables'
import * as React from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'

interface Props {
  text: string
  style?: StyleProp<ViewStyle>
}

export default function SectionheadNew({ text, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: variables.contentPadding,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...fontStyles.sectionHeader,
    fontSize: 13,
    lineHeight: 16,
    color: colors.gray4,
  },
})

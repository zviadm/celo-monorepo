import { css, StyleSheet as AphroStyleSheet } from 'aphrodite'
import {
  Dimensions as RNDimensions,
  LayoutChangeEvent as RNLCEvent,
  SectionList as RNSectionList,
  SectionListRenderItemInfo as RNSListRenInfo,
} from 'react-native'

export type LayoutChangeEvent = RNLCEvent

export function View(props: any) {
  return <div className={css(props.style)}>{props.children}</div>
}

export const StyleSheet = AphroStyleSheet

export function Text(props: any) {
  return <span className={css(props.style)}>{props.children}</span>
}

export type TextStyle = any
export type ViewStyle = any

export type ImageSourcePropType = string

export function Image(props: any) {
  const source = typeof props.source === 'string' ? props.source : props.source.uri
  return <img className={css(props.style)} src={source} />
}

export function ImageBackground(props: any) {
  const source = typeof props.source === 'string' ? props.source : props.source.uri
  return <img className={css(props.style)} src={source} />
}

export function TextInput(props) {
  return <input type="text" {...props} className={css(props.styles)} />
}

export function TouchableOpacity(props: any) {
  return <View style={props.style}>{props.children}</View>
}

export const Dimensions = RNDimensions
export const SectionList = RNSectionList
// @ts-ignore
export type SectionListRenderItemInfo<T> = RNSListRenInfo<T>

export interface TextInputProps {
  name?: string
  type?: string
  required?: boolean
  value?: string
  onChange: (event: any) => void
}

import * as React from 'react'
import { StyleSheet, Text, View } from 'src/shared/core'
import { colors, fonts, standardStyles, textStyles } from 'src/styles'

interface CheckboxProps {
  checked: boolean
  name: string
  onPress: (x: any) => void
}

export function CheckboxWithLabel({
  checked,
  onPress,
  name,
  label,
}: CheckboxProps & {
  label: string
}) {
  return (
    <View style={standardStyles.row}>
      <Checkbox checked={checked} onPress={onPress} name={name} />

      <Text style={[fonts.a, textStyles.medium, checkBoxStyles.labelArea]}>
        <label htmlFor={name} onClick={onPress} style={checkBoxStyles.label}>
          {label}
        </label>
      </Text>
    </View>
  )
}

function Checkbox({ checked, onPress, name }: CheckboxProps) {
  return (
    <View style={checkBoxStyles.border}>
      <Text
        style={[
          checkBoxStyles.checkMark,
          checked ? checkBoxStyles.checkMarkChecked : checkBoxStyles.hidden,
        ]}
      >
        ✓
      </Text>
      {React.createElement('input', {
        type: 'checkbox',
        name,
        checked,
        onClick: onPress,
        style: checkBoxStyles.hidden,
      })}
    </View>
  )
}

const checkBoxStyles = StyleSheet.create({
  border: {
    paddingHorizontal: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  checkMark: {
    color: colors.gray,
    position: 'absolute',
    transform: `translateY(-2px) translateX: 1px`,
    transitionProperty: 'opacity',
    transitionDuration: '100ms',
  },
  checkMarkChecked: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
  label: { paddingHorizontal: 10 },
  labelArea: {
    color: colors.secondary,
    lineHeight: 20,
  },
})

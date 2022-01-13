import React, { memo } from 'react'
import { TextInput, View } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const InputText = (props) => {
    const { placeholder, value, onChangeText } = props

    return (
        <View
            style={{
                marginHorizontal: sizes.s48,
                marginBottom: sizes.s18,
                height: sizes.s42,
                justifyContent: 'center',
            }}
        >
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.muted}
                style={{
                    backgroundColor: colors.grey,
                    paddingHorizontal: sizes.s20,
                    paddingVertical: sizes.s10,
                    color: colors.muted,
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: sizes.s16,
                    borderRadius: sizes.s8,
                }}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default memo(InputText)

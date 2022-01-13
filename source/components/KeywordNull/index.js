import React, { memo } from 'react'
import { Text, View } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const KeywordNull = (props) => {
    const { caption } = props

    return (
        <View
            style={{
                marginHorizontal: sizes.s36,
            }}
        >
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'OpenSans-Regular',
                    color: colors.muted,
                }}
            >
                {caption}
            </Text>
        </View>
    )
}

export default memo(KeywordNull)

import React, { memo } from 'react'
import { Text, View } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const TextIdentity = (props) => {
    const { title, publisher } = props

    return (
        <View style={{ marginBottom: sizes.s24 }}>
            <Text
                style={{
                    fontSize: sizes.s20,
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.dark,
                }}
            >
                {title}
            </Text>
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'OpenSans-Regular',
                    color: colors.muted,
                }}
            >
                {`by ${publisher}`}
            </Text>
        </View>
    )
}

export default memo(TextIdentity)

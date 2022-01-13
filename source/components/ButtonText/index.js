import React, { memo } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const ButtonText = (props) => {
    const { textQuestion, textAction, action } = props

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}
        >
            <Text
                style={{
                    fontSize: sizes.s16,
                    fontFamily: 'OpenSans-Regular',
                    color: colors.muted,
                }}
            >
                {`${textQuestion} `}
            </Text>
            <TouchableOpacity onPress={action}>
                <Text
                    style={{
                        fontSize: sizes.s16,
                        fontFamily: 'OpenSans-SemiBold',
                        color: colors.muted,
                    }}
                >
                    {textAction}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(ButtonText)

import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const ButtonMain = (props) => {
    const { title, action } = props

    return (
        <TouchableOpacity onPress={action}>
            <Text
                style={{
                    fontFamily: 'OpenSans-SemiBold',
                    fontSize: sizes.s24,
                    paddingHorizontal: sizes.s48,
                    paddingVertical: sizes.s12,
                    backgroundColor: colors.dark,
                    color: colors.white,
                    borderRadius: sizes.s64,
                    marginBottom: sizes.s16,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(ButtonMain)

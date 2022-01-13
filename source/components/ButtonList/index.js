import React, { memo } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const ButtonList = (props) => {
    const { title, action } = props

    return (
        <TouchableOpacity onPress={action}>
            <Text
                style={{
                    backgroundColor: colors.grey,
                    paddingHorizontal: sizes.s20,
                    paddingVertical: sizes.s10,
                    fontSize: sizes.s18,
                    fontFamily: 'OpenSans-SemiBold',
                    color: colors.dark,
                    borderRadius: sizes.s8,
                    marginBottom: sizes.s12,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(ButtonList)

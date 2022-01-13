import React, { memo } from 'react'
import { Text } from 'react-native'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'

const TextIngredient = (props) => {
    const { backgroundColor, title, number } = props
    return (
        <Text
            style={{
                fontSize: sizes.s16,
                fontFamily: 'OpenSans-Regular',
                backgroundColor,
                color: colors.dark,
                paddingHorizontal: sizes.s12,
                paddingVertical: sizes.s6,
            }}
        >
            {number ? `${number}. ${title}` : title}
        </Text>
    )
}

export default memo(TextIngredient)

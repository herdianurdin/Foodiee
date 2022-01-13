import React, { memo } from 'react'
import { Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'

const HeaderApp = () => {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    marginBottom: sizes.s28,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
            >
                <FastImage
                    source={require('../../assets/images/foodie.webp')}
                    style={{
                        width: sizes.s64,
                        height: sizes.s64,
                        marginRight: sizes.s8,
                    }}
                />
                <Text
                    style={{
                        fontSize: sizes.s42,
                        fontFamily: 'FiraSans',
                        color: colors.dark,
                    }}
                >
                    Foodiee
                </Text>
            </View>
        </View>
    )
}

export default memo(HeaderApp)

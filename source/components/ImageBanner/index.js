import React, { memo } from 'react'
import FastImage from 'react-native-fast-image'
import sizes from '../../assets/sizes'

const ImageBanner = (props) => {
    const { source } = props

    return <FastImage source={source} style={{ width: sizes.s300, height: sizes.s240 }} />
}

export default memo(ImageBanner)

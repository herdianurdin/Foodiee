import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const s6 = (width / 68.5) | 0
const s8 = (width / 51.375) | 0
const s9 = (width / 45.667) | 0
const s10 = (width / 41.1) | 0
const s12 = (width / 34.25) | 0
const s16 = (width / 25.6875) | 0
const s18 = (width / 22.834) | 0
const s20 = (width / 20.55) | 0
const s24 = (width / 17.125) | 0
const s28 = (width / 14.678571429) | 0
const s32 = (width / 12.84375) | 0
const s36 = (width / 11.41667) | 0
const s42 = (width / 9.785714286) | 0
const s48 = (width / 8.5625) | 0
const s54 = (width / 7.611) | 0
const s64 = (width / 6.421875) | 0
const s120 = (width / 3.425) | 0
const s150 = (width / 2.74) | 0
const s160 = (width / 2.56875) | 0
const s200 = (width / 2.055) | 0
const s240 = (width / 1.7125) | 0
const s300 = (width / 1.37) | 0
const imgWidth = (width - s64) | 0
const imgHeight = ((imgWidth / 4) * 3) | 0
const partHeight = height - s240

const sizes = {
    s6,
    s8,
    s9,
    s10,
    s12,
    s16,
    s18,
    s20,
    s24,
    s28,
    s32,
    s36,
    s48,
    s42,
    s54,
    s64,
    s120,
    s150,
    s160,
    s200,
    s240,
    s300,
    imgWidth,
    imgHeight,
    partHeight,
}

export default sizes

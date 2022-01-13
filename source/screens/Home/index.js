import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, SafeAreaView, RefreshControl, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { HeaderHome, BannerView, CardRecipe, LoadingView } from '../../components'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'
import firestore from '@react-native-firebase/firestore'

const Home = ({ navigation }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const refreshData = () => {
        firestore()
            .collection('Recipes')
            .limit(8)
            .onSnapshot((recipes) => {
                const dataCollected = recipes.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))

                setData(dataCollected)
                setRefresh(false)
            })
    }

    const renderItem = useCallback(
        ({ item }) => (
            <CardRecipe
                image={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/foodiee-1c540.appspot.com/o/images%2Ffoods%2F${item.image}?alt=media&token`,
                }}
                title={item.title}
                publisher={item.publisher}
                action={() => navigation.navigate('Detail', { recipe: item })}
            />
        ),
        []
    )

    const keyExtractor = useCallback((item) => item.id, [])

    useEffect(() => {
        const subscribe = firestore()
            .collection('Recipes')
            .limit(8)
            .onSnapshot((recipes) => {
                const dataCollected = recipes.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))

                setData(dataCollected)
                setLoading(false)
            })

        return () => subscribe()
    }, [])

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl onRefresh={refreshData} refreshing={refresh} />}
            >
                <HeaderHome
                    actionAccount={() => navigation.navigate('Account')}
                    actionSearch={() => navigation.navigate('Search')}
                />
                <BannerView />
                <Text style={styles.textSubtitle}>Terbaru</Text>
                <FlatList
                    columnWrapperStyle={styles.cardRecipeContainer}
                    numColumns={2}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    textSubtitle: {
        marginHorizontal: sizes.s32,
        marginBottom: sizes.s8,
        fontSize: sizes.s20,
        fontFamily: 'OpenSans-SemiBold',
        color: colors.dark,
    },
    cardRecipeContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.s32,
    },
})

export default Home

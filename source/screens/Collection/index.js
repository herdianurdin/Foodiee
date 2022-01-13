import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, SafeAreaView, View, ActivityIndicator, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { HeaderMain, SearchBar, CardRecipe, KeywordNull } from '../../components'
import sizes from '../../assets/sizes'
import colors from '../../assets/colors'
import firestore from '@react-native-firebase/firestore'

const Collection = ({ navigation, route }) => {
    const { userId } = route.params
    const [allData, setAllData] = useState([])
    const [data, setData] = useState([])
    const [keyword, setKeyword] = useState('')
    const [caption, setCaption] = useState('')
    const [loading, setLoading] = useState(true)

    const handleSearchData = () => {
        setLoading(true)

        const dataFiltered = allData.filter((item) => {
            return item.title.toLowerCase().includes(keyword.toLowerCase())
        })

        setData(dataFiltered)
        setCaption(dataFiltered.length != 0 ? '' : 'Resep yang Anda cari tidak ditemukan ...')
        setLoading(false)
    }

    const renderRecipe = useCallback(
        ({ item }) => (
            <CardRecipe
                key={item.id}
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

    useEffect(() => {
        const subscribe = firestore()
            .collection('RecipeCollection')
            .where('userId', '==', userId)
            .onSnapshot((collect) => {
                const recipeCollection = collect.docs.map((doc) => doc.data().recipeId)

                if (recipeCollection.length != 0) {
                    firestore()
                        .collection('Recipes')
                        .where(firestore.FieldPath.documentId(), 'in', recipeCollection)
                        .get()
                        .then((collect) => {
                            const dataCollection = collect.docs.map((doc, i) =>
                                Object.assign({ id: doc.id }, doc.data())
                            )

                            setAllData(dataCollection)
                            setData(dataCollection)
                            setLoading(false)
                        })
                } else {
                    setAllData([])
                    setData([])
                    setCaption('Anda belum memiliki koleksi resep ...')
                    setLoading(false)
                }
            })

        return () => subscribe()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <HeaderMain title="Koleksi Resep" action={() => navigation.goBack()} />
            <SearchBar
                placeholder="Cari resep ..."
                value={keyword}
                onChangeText={setKeyword}
                action={handleSearchData}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                {loading ? (
                    <View
                        style={{
                            height: sizes.partHeight,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <ActivityIndicator
                            color={colors.secondary}
                            size={'large'}
                            style={{
                                marginBottom: sizes.s16,
                            }}
                        />
                        <Text
                            style={{
                                fontSize: sizes.s16,
                                fontFamily: 'OpenSans-SemiBold',
                                color: colors.muted,
                            }}
                        >
                            Memuat ...
                        </Text>
                    </View>
                ) : data.length != 0 ? (
                    <FlatList
                        columnWrapperStyle={styles.cardRecipeContainer}
                        numColumns={2}
                        data={data}
                        renderItem={renderRecipe}
                    />
                ) : (
                    <KeywordNull caption={caption} />
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    cardRecipeContainer: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: sizes.s32,
    },
})

export default Collection

import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import FastImage from 'react-native-fast-image'
import { HeaderDetail, TextIdentity, TextIngredient, LoadingView } from '../../components'
import colors from '../../assets/colors'
import sizes from '../../assets/sizes'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const Detail = ({ navigation, route }) => {
    const { recipe } = route.params
    const [marked, setMarked] = useState(false)
    const [markedId, setMarkedId] = useState(null)
    const [markedDisable, setMarkedDisable] = useState(true)
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const handleMarked = () => {
        setMarkedDisable(false)

        if (marked) {
            firestore()
                .collection('RecipeCollection')
                .doc(markedId)
                .delete()
                .then(() => {
                    setMarked(false)
                    setMarkedDisable(true)
                })
        } else {
            firestore()
                .collection('RecipeCollection')
                .add({
                    userId: user.uid,
                    recipeId: recipe.id,
                })
                .then((collect) => {
                    setMarkedId(collect.id)
                    setMarked(true)
                    setMarkedDisable(true)
                })
        }
    }

    const renderIngredients = useCallback(
        ({ item, index }) => (
            <TextIngredient
                key={index.toString()}
                title={item}
                backgroundColor={index % 2 == 0 ? colors.primary : colors.white}
            />
        ),
        []
    )

    const renderMethod = useCallback(
        ({ item, index }) => (
            <TextIngredient
                key={index.toString()}
                title={item}
                backgroundColor={index % 2 == 0 ? colors.primary : colors.white}
                number={index + 1}
            />
        ),
        []
    )

    useEffect(() => {
        const userAuth = auth().onAuthStateChanged((userCredentials) => {
            if (userCredentials) {
                setUser(userCredentials)

                firestore()
                    .collection('RecipeCollection')
                    .where('recipeId', '==', recipe.id)
                    .get()
                    .then((collections) => {
                        const allCollection = collections.docs.map((doc) => Object.assign({ id: doc.id }, doc.data()))
                        const filterCollection = allCollection.filter((item) => {
                            return item.userId == userCredentials.uid
                        })

                        setMarked(filterCollection.length != 0 ? true : false)
                        setMarkedId(filterCollection.length != 0 ? filterCollection[0].id : null)
                        setLoading(false)
                    })
            } else {
                setLoading(false)
            }
        })

        return () => userAuth()
    }, [])

    return loading ? (
        <LoadingView />
    ) : (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HeaderDetail
                    disabled={user && markedDisable ? false : true}
                    bookmarkIcon={marked ? 'bookmark' : 'bookmark-outline'}
                    actionBack={() => navigation.goBack()}
                    actionBookmark={handleMarked}
                />
                <View style={styles.mainContainer}>
                    <FastImage
                        source={{
                            uri: `https://firebasestorage.googleapis.com/v0/b/foodiee-1c540.appspot.com/o/images%2Ffoods%2F${recipe.image}?alt=media&token`,
                        }}
                        style={styles.imageFood}
                    />
                    <TextIdentity title={recipe.title} publisher={recipe.publisher} />
                    <View>
                        <Text style={styles.textSubtitle}>Bahan-Bahan</Text>
                    </View>
                    <View style={styles.thingContainer}>
                        <FlatList
                            listKey={(item, index) => 'I' + index.toString()}
                            data={recipe.ingredients}
                            renderItem={renderIngredients}
                        />
                    </View>
                    <View>
                        <Text style={styles.textSubtitle}>Cara Membuat</Text>
                    </View>
                    <View style={styles.thingContainer}>
                        <FlatList
                            listKey={(item, index) => 'M' + index.toString()}
                            data={recipe.method}
                            renderItem={renderMethod}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    imageFood: {
        width: sizes.imgWidth,
        height: sizes.imgHeight,
        alignSelf: 'center',
        borderRadius: sizes.s16,
        marginBottom: sizes.s16,
    },
    mainContainer: {
        marginHorizontal: sizes.s32,
    },
    textSubtitle: {
        fontSize: sizes.s18,
        fontFamily: 'OpenSans-SemiBold',
        color: colors.dark,
        paddingBottom: sizes.s8,
    },
    thingContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.muted,
        borderStyle: 'dashed',
        paddingVertical: sizes.s6,
        marginBottom: sizes.s16,
    },
})

export default Detail

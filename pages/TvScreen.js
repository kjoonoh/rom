import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TvScreen = () => {
    const [airtodays, setAirtodays] = useState([])
    const [tvpopulars, setTvpopulars] = useState([])
    const [toprateds, setToprates] = useState([])
    const navigation1 = useNavigation()
    const getAddress = (category) => {
        
        return `https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`
    }
    const options = {
       headers: {
             accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
        }
      }

    const getAirtodayData = async() => {
        try {
            const result = await axios.get(getAddress("airing_today"), options)
            console.log(result.data.results)
            setAirtodays(result.data.results)
        } catch (error) {
            
        }
    }

    const getTvpopulars = async() => {
        try {
            const result = await axios.get(getAddress("popular"), options)
            console.log(result.data.results)
            setTvpopulars(result.data.results)
        } catch (error) {
            
        }
    }

    const getTopratedData = async() => {
        try {
            const result = await axios.get(getAddress("top_rated"), options)
            console.log(result.data.results)
            setToprates(result.data.results)
        } catch (error) {
            
        }
    }

useEffect(() => {
    getAirtodayData()
    getTvpopulars()
    getTopratedData()
}, [])

    return (
        <SafeAreaView
        style={{
            margin: 10,
            flex: 1,
            maringTop: StatusBar.currentHeight || 0
        }}
    >
    <ScrollView>
       <View
         style={{
            maringHorizontal: 10,
            marginTop: 20
         }}
       >
       <Text>오늘TV</Text>
       </View>

        <FlatList
            data={airtodays}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.6,
                        width: 200,
                        height: 350,
                        borderRadius: 8,
                        padding: 10,
                        margin: 10
                    }}
     
                    onPress={() => navigation1.navigate("TvDetail", {data: item.id})}
                >  
    
                    <Image
                        style={{
                            width: "170px",
                            height: "120px",
                            resizeMode: "cover",
                            borderRadius: 10,
                            margin: 5,
                        }}
                        source={{
                            uri: "https://image.tmdb.org/t/p/w500" + item.poster_path

                        }}
                    />
                     <View
                         style={{
                         height: "190px",
                         margin: 5,
                         background: "white",
                         padding: 10
                            
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            margin: 3
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text>
                        {item.overview.slice(0,100)}
                    </Text>
                    
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            margin: 3
                        }}
                    >
                      평점:  {item.vote_average}
                    </Text>
                

                </View>


            </TouchableOpacity>
                
            )}

        
        />

       <View
         style={{
            maringHorizontal: 10,
            marginTop: 20
         }}
       >
       <Text>인기TV</Text>
       </View>
        <FlatList
            data={tvpopulars}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.6,
                        width: 200,
                        height: 350,
                        borderRadius: 8,
                        padding: 10,
                        margin: 10
                    }}
                    onPress={() => navigation1.navigate("TvDetail", {data: item.id})}
                >  
    
                    <Image
                        style={{
                            width: "170px",
                            height: "120px",
                            resizeMode: "cover",
                            borderRadius: 10,
                            margin: 5,
                        }}
                        source={{
                            uri: "https://image.tmdb.org/t/p/w500" + item.poster_path

                        }}
                    />
                     <View
                         style={{
                         height: "190px",
                         margin: 5,
                         background: "white",
                         padding: 10
                            
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            margin: 3
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text>
                        {item.overview.slice(0,100)}
                    </Text>
                    
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            margin: 3
                        }}
                    >
                      평점:  {item.vote_average}
                    </Text>
                

                </View>


            </TouchableOpacity>
                
            )}

        
        />
        <View
         style={{
            maringHorizontal: 10,
            marginTop: 20
         }}
       >
       <Text>TOP TV</Text>
       </View>

        <FlatList
            data={toprateds}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                <TouchableOpacity
                    style={{
                        borderColor: "grey",
                        borderWidth: 0.6,
                        width: 200,
                        height: 350,
                        borderRadius: 8,
                        padding: 10,
                        margin: 10
                    }}
     
                    onPress={() => navigation1.navigate("TvDetail", {data: item.id})}
                >  
    
                    <Image
                        style={{
                            width: "170px",
                            height: "120px",
                            resizeMode: "cover",
                            borderRadius: 10,
                            margin: 5,
                        }}
                        source={{
                            uri: "https://image.tmdb.org/t/p/w500" + item.poster_path

                        }}
                    />
                     <View
                         style={{
                         height: "190px",
                         margin: 5,
                         background: "white",
                         padding: 10
                            
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 600,
                            margin: 3
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text>
                        {item.overview.slice(0,100)}
                    </Text>
                    
                    <Text
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            margin: 3
                        }}
                    >
                      평점:  {item.vote_average}
                    </Text>
                

                </View>


            </TouchableOpacity>
                
            )}

        
        />


    
    </ScrollView>
    </SafeAreaView>
    );
};

export default TvScreen;
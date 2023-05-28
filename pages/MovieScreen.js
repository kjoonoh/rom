import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';



const MovieScreen = () => {
    const [nowPlayings, setNowPlayings] = useState([])
    const [populars, setPopulars] = useState([])
    const [upcomings, setUpcomings] = useState([])
    const route = useRoute()
    const navigation = useNavigation()
    const getAddress = (category) => {
        // return `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`
        return `https://api.themoviedb.org/3/${category}?language=en-US&page=1`
    }
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
        }
    }

const getNowPlayingData = async () => {
    try {

        const result = await axios.get(getAddress("movie/now_playing"), options)
        console.log(result.data.results)
        setNowPlayings(result.data.results)
    } catch (error) {
        
    }
}

const getPopularData = async () => {
    try {
            const result = await axios.get(getAddress("movie/popular"), options)
            console.log(result.data.results)
            setPopulars(result.data.results)
    } catch (error) {
        
    }
}

const getUpcominData = async () => {
    try {
            const result = await axios.get(getAddress("movie/upcoming"), options)
            console.log(result.data.results)
            setUpcomings(result.data.results)
    } catch (error) {
        
    }
}

useEffect(() => {
    getNowPlayingData()
    getPopularData()
    getUpcominData()
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
       <Text>현재상영작</Text>
       </View>

        <FlatList
            data={nowPlayings}
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
     
                    onPress={() => navigation.navigate("Detail", {data: item.id})}
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
       <Text>인기작품</Text>
       </View>
        <FlatList
            data={populars}
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
                    onPress={() => navigation.navigate("Detail", {data: item.id})}
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
       <Text>상영예정작</Text>
       </View>

        <FlatList
            data={upcomings}
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
     
                    onPress={() => navigation.navigate("Detail", {data: item.id})}
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

export default MovieScreen;
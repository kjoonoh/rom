import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StatusBar, Dimensions, ScrollView } from 'react-native';



const TvDetail = () => {
    const Route = useRoute()
    const [tvdatas, setTvdatas] = useState({})
    console.log(Route.params.data)

    const getRink = async () => {
        try {
            

            const options = {
                   headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
                }
              };
            const result = await axios.get(`https://api.themoviedb.org/3/tv/${Route.params.data}?language=en-US&page=1`, options)
            console.log("++++++++++", result.data)
            setTvdatas(result.data)
        } catch (error) {
            
        }
    }
    useEffect(() => {
        getRink()
    }, [])

    return (
        <SafeAreaView
         
            style={{
                
                flex: 1,
                marginTop: statusbar.currentHeight || 0,
                backgroundColor: "black",
                width: Dimensions.get("window").width
            }}
         >
            <ScrollView>
            <View>
                <Image
                    style={{
                        width: Dimensions.get("window").width,
                        height: "250px",
                    }}
                    source={{
                      uri: "https://image.tmdb.org/t/p/w200" + tvdatas.poster_path
                    //   uri: "https://image.tmdb.org/t/p/w200/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"

                    }}
                />
            </View>
             <View
                style={{
                    margin: 15
                    
                }}
             >
             <Text
                    style={{
                        color: "gray",
                        fontWeight: 10,
                        fontSize: 20,
                        marginBottom: 10
                    }}
                >
                    {/* overview 11111111111111111111111111111111111 */}
                 </Text>
                 <Text
                    style={{
                        
                        color: "white",
                        
                    }}
                >
                    {tvdatas?.overview?.slice(0,150)}
                 </Text>
             </View>
             <View
                style={{
                    
                    width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height/7,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",


                }}
             >
                <View
                    style={{
                        // backgroundColor: "blue",
                        width: 100,
                        height: 80,
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center"

                    }}
                >

                    <Text
                        style={{
                            color: "white",
                            marginBottom: 10,
                        
                        }}
                    >
                        BUDGET
                    </Text>
                    <Text
                        style={{
                          color: "white"
                          
                        }}
                    >

                        ${tvdatas.budget}
                    </Text>

                </View>
                <View
                    style={{
                        // backgroundColor: "blue",
                        width: 100,
                        height: 80,
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center"

                    }}
                >

                    <Text
                        style={{
                            color: "white",
                            marginBottom: 10,
                    
                        }}
                    >
                        RUNTIME
                    </Text>
                    <Text
                        style={{
                          color: "white"
                          
                        }}
                    >

                        {tvdatas.runtime} minute
                    </Text>

                </View>
                <View
                    style={{
                        // backgroundColor: "blue",
                        width: 100,
                        height: 80,
                        margin: 10,
                        alignItems: "center",
                        justifyContent: "center"

                    }}
                >

                    <Text
                        style={{
                            color: "white",
                            marginBottom: 10,
                            
                        }}
                    >
                        RELEASE DATE
                    </Text>
                    <Text
                        style={{
                          color: "white"
                        }}
                    >

                        {tvdatas.release_date}
                    </Text>

                </View>
             </View>




             <View>
                <View>
                    <Text
                        style={{
                            color: "white",
                        }}
                    >
                    </Text>
                </View>
                

             </View>
             <View
                style={{
                    margin: 15,
                    boderColor: "yellow"
                    
                }}
             >
             <Text
                    style={{
                        color: "gray",
                        fontWeight: 10,
                        fontSize: 15,
                        marginBottom: 10
                    }}
                >
                    GENRES
                 </Text>
                 <Text
                    style={{
                        color: "white",
                        
                    }}
                >
                    {tvdatas?.genres?.map(g => (
                        <View 
                            key={g.name + g.id}
                            style={{
                                backgroundColor: "white",
                                height: 40,
                                marginHorizontal: 7,
                                marginVertical: 5,
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                                borderWidth: 1,
                                borderStyle: "solid",
                                boderColor: "#0000",
                                borderRadius: 20,

                            }}
                        >
                        
                            <Text
                                style={{
                                    color: "black"
                                }}
                            >
                                {g.name}

                            </Text>
                        </View>
                    ))}
                 </Text>
             </View>
                        

            

            
            
          
            </ScrollView>              
        </SafeAreaView>



    );
};
export default TvDetail;
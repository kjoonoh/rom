import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, SafeAreaView, FlatList, Image, StatusBar, Dimensions, ScrollView } from 'react-native';



const Detail = () => {
    const Route = useRoute()
    const [ondatas, setOndatas] = useState({})
    console.log(Route.params.data)

    const getRink = async () => {
        try {
            

            const options = {
                   headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDRkNGU3NzU2MjE5NWUzNmE4OGY3MmI4YTU2ZjQzNiIsInN1YiI6IjY0NDQ4NWE3MDU4MjI0MDJmYjMyZjQ5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HiBKa57r3cJVfdbRcm9-gBXo0ToW2e_cWRGWqVx2i3M'
                }
              };
            const result = await axios.get(`https://api.themoviedb.org/3/movie/${Route.params.data}?language=en-US&page=1`, options)
            console.log("ddddddddddddddddddddddd", result.data)
            setOndatas(result.data)
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
                    //   uri: "https://image.tmdb.org/t/p/w200" + ondatas.poster_path
                      uri: "https://image.tmdb.org/t/p/w200/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"

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
                    overview
                 </Text>
                 <Text
                    style={{
                        
                        color: "white",
                        
                    }}
                >
                    {ondatas?.overview?.slice(0,150)}
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

                        ${ondatas.budget}
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

                        {ondatas.runtime} minute
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

                        {ondatas.release_date}
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
                    {ondatas?.genres?.map(g => (
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

export default Detail;











        // <View>
        //     <View>
        //         <Text>
        //         {ondatas.homepage}  
        //         </Text>
        //         {/* {console.log(ondatas?.genres?.map(s => s.name))} */}         

                       
        //     </View>
        //     <View
        //         style={{
        //             flexDirection: 'row',
        //             height: 100,
        //             padding: 10,
        //         }}
        //     >
        //     {ondatas?.genres?.map(s => (
        //             <Text key={s.name + s.id}> {/* 어레이데이터는 key값을 줘야 에러가 안남*/}                       
        //                 {s.name} /
        //             </Text>
        //         ))}
        //     </View>
        // </View>
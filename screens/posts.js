import { useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

/// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/redux/users';

export default function Posts(){
    const users = useSelector((state)=>state.users);
    const dispatch =  useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts());
    },[])

    console.log(users.posts)

    return(
        <View style={styles.container}>
            { users.loading && <ActivityIndicator size="large"/>}
            <FlatList
                data={users.posts}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <View style={styles.postsBox}> 
                        <Text>Title: {item.title}</Text>
                        <Text>Body: {item.body}</Text>
                    </View>
                )}  
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:50,
        paddingHorizontal:20
    },
    postsBox:{
        marginTop:10,
        padding:10,
        borderWidth:1,
        borderColor:'grey'
    }
})
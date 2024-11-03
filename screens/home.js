import { Text, View, StyleSheet, Button, FlatList } from "react-native";
// import { useContext } from "react";
// import { StoreContext } from "../store/context";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { changeAppName } from '../store/redux/users';

export default function Home(){
    // const storeContext = useContext(StoreContext);
    const users = useSelector((state)=> state.users);
    const dispatch = useDispatch();

    return(
        <View style={styles.container}>
            <Text style={{fontSize:20}}>
                {users.appName}
            </Text>
            <Button
                title="Change app name"
                onPress={()=> dispatch(changeAppName('New name of app'))}
            />

            <FlatList
                data={users.users}
                keyExtractor={item=> item.email}
                renderItem={({item})=>(
                    <View style={styles.userBox}> 
                        <Text>Email: {item.email}</Text>
                        <Text>Message: {item.message}</Text>
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
    userBox:{
        marginTop:10,
        padding:10,
        borderWidth:1,
        borderColor:'grey'
    }
})
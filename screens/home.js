import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { useContext } from "react";
import { StoreContext } from "../store/context";

export default function Home(){
    const storeContext = useContext(StoreContext);


    return(
        <View style={styles.container}>
            <Text style={{fontSize:20}}>
                {storeContext.appName}
            </Text>
            <Button
                title="Change app name"
                onPress={()=> storeContext.changeAppName('New name of app')}
            />

            <FlatList
                data={storeContext.users}
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
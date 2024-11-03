import { Text, View, StyleSheet, Button } from "react-native";
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
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:50,
        paddingHorizontal:20
    }
})
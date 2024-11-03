import { Text, View } from "react-native";
import { useContext } from "react";
import { StoreContext } from "../store/context";

export default function Home(){
    const storeContext = useContext(StoreContext);

    console.log(storeContext)

    return(
        <View>
            <Text>{storeContext.appName}</Text>
        </View>
    )
}
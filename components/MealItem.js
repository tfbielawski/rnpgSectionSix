import {Image, Pressable, Text, View, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";

function MealItem({id, title, imageUrl, duration, complexity, affordability}){
    const navigation = useNavigation();

    function selectMealItemHander(){
        navigation.navigate("MealDetail", {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color:"gray"}}
                style={({pressed}) => [
                   pressed ? styles.buttonPressed : null,
               ]}
                onPress={selectMealItemHander}
            >
                <View>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration} minutes</Text>
                        <Text style={styles.detailItem}>Difficulty: {complexity.toUpperCase()} </Text>
                        <Text style={styles.detailItem}>Cost: {affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius:8,
        //overflow: "hidden", //prevent visibility of anything not contained in the card
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
        overflow: Platform.os === "android" ? "hidden": "visible"
    },
    buttonPressed:{
        opacity: 0.5,
    },
    innerComtaimer:{
        borderRadius: 8,
        overflow: "hidden",
    },
    image:{
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        margin: 8,
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }
});



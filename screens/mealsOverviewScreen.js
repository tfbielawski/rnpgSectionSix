import { MEALS, CATEGORIES } from '../data/dummy-data'
import {View, FlatList, StyleSheet} from "react-native";
import MealItem from "../components/MealItem";
import category from "../models/category";
import {useLayoutEffect} from "react";

function MealsOverviewScreen({route, navigation}){
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    //Executes simultaenously with component function, useEffect executes after
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catId).title;

        navigation.setOptions({title: categoryTitle});
    }, [catId, navigation]);


    function renderMealItem(itemData) {
        const mealItemProps = {
            id: item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration
        }
        return <MealItem {...mealItemProps}/>
    }

    return <View style={styles.container}>
       <FlatList
           data={displayedMeals}
           keyExtractor={(item) => item.id }
           renderItem={renderMealItem}
       />
    </View>
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        fles: 1,
        padding: 16
    }
})

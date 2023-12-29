import { FlatList } from "react-native"
import { CATEGORIES} from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData){
        function pressHandler(){
            //Pass the name of the screen to go to
            //Also pass in an object with the params for that screen
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        }
        return(
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }
    return (
       <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;

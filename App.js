import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CategoriesScreen from "./screens/CategoriesScreen.js";
import MealsOverviewScreen from "./screens/mealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
      <>
        <StatusBar style={"light"}/>
          <NavigationContainer>
              <Stack.Navigator
                  // ReactNav docs > Navigators > Native Stack > Options
                  screenOptions={{
                      headerStyle: { backgroundColor: "#0099cc"},
                      headerTintColor: "white",
                      contentStyle: {backgroundColor:  "#cccccc" }
                  }}
              >
                  <Stack.Screen
                      name="MealsCategories"
                      component={CategoriesScreen}
                      options={{
                          // ReactNav docs > Navigators > Native Stack > Options
                          title: "All Categories"
                      }}
                  />
                  <Stack.Screen
                      name="MealsOverview"
                      component={MealsOverviewScreen}
                      //--route and nav are auto passed in by react nav--//
                      // options={({route, navigation})=>{
                      //     const catId = route.params.categoryId;
                      //     return {
                      //         title: catId,
                      //     };
                      // }}

                  />
                  <Stack.Screen
                      name="MealDetail"
                      component={MealDetailScreen}

                  />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

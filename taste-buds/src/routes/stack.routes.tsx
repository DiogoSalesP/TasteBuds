import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Recipes from "../pages/Recipes";

function StackRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Recipes"
        component={Recipes}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;
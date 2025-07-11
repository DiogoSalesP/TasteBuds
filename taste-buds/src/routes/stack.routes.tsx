import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";

function StackRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  )
}

export default StackRoutes;
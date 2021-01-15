import { createAppContainer } from "react-navigation";
import Home from "../screens/home/home.js";
import ToDo from "../screens/todo/todo.js";

const HomeNavigator = createStackNavigator({
    HomeScreen:Home,
    ToDoScreen:ToDo
});

export default createAppContainer(HomeNavigator);
import "@aws-amplify/ui-react/styles.css";
import { 
  Flex, 
  View, 
  useBreakpointValue,
} from '@aws-amplify/ui-react';
import Home from "./Home.js";
import MenuBar from "./MenuBar.js"
import Reserv from "./Reserv.js";

export default function App() {
  const breakPoint = useBreakpointValue( {
    small: "small",
    medium: "medium",
    xxl: "xxl",
  })

  return (
    <View>
      <Flex direction="column" maxWidth="90%" margin="0 auto">
        <MenuBar breakPoint={breakPoint}/>
        <Home />
      </Flex>
    </View>
  );
};

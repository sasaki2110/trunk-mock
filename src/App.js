import "@aws-amplify/ui-react/styles.css";
import { 
  Flex, 
  View, 
  useBreakpointValue,
} from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import MenuBar from "./MenuBar.js"
import Reserv from "./Reserv.js";
import NotFound from "./NotFound.js";

export default function App() {
  const breakPoint = useBreakpointValue( {
    small: "small",
    medium: "medium",
    xxl: "xxl",
  })

  return (
    <View>
      <BrowserRouter>
        <Flex direction="column" maxWidth="90%" margin="0 auto">
          <MenuBar breakPoint={breakPoint}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Home />} />
            <Route path="/reserv" element={<Reserv />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Flex>
      </BrowserRouter>
    </View>
  );
};

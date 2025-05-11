import { useState } from "react";
import { Search } from "./Component/Search";
import { FoodList } from "./Component/FoodList";
import { Nav } from "./Component/Nav";
import "./App.css";
import { Container } from "./Component/Container";
import { InnerContainer } from "./InnerContainer";
import { FoodDetail } from "./Component/FoodDetail";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodId={foodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;

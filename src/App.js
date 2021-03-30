import Heading from "./components/Heading"
import Category from "./components/Category"
import List from "./components/List"
import {useState, useEffect} from "react"
import data from "./data"
import {Context} from "./components/context"

function App() {
  const [items, setItems] = useState([])

  const all = () => (setItems(data))

  const breakfast = () => {
    setItems(data.filter((item) => item.category === "breakfast"))
  }
  const lunch = () => {
    setItems(data.filter((item) => item.category === "lunch"))
  }
  const shakes = () => {
    setItems(data.filter((item) => item.category === "shakes"))
  }
  
  useEffect(() => {
    all()
  }, [])

  return (
    <Context.Provider value={{
      all, breakfast, lunch, shakes
    }}>
      <div>
        <Heading/>
        <Category/>
        {items.length === 0 ? <h4>Loading...</h4> : <List dishes={items}/>}
      </div>
    </Context.Provider>
  );
}

export default App;

import Banner1 from "./Banner/Banner1/Banner1"
import { Card1 } from "./Cards/Card1"
import Card2 from "./Cards/Card2"
import Card3 from "./Cards/Card3"
import Card4 from "./Cards/Card4"
import Hours1 from "./Hours/Hours1/Hours1"
import Hours2 from "./Hours/Hours2/Hours2"
import Hours3 from "./Hours/Hours3"

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Banner1 />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Hours1 />
      <Hours2 />
      <Hours3 />
    </div>
  )
}
export default (App)

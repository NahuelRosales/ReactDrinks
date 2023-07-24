import SearchForm from "../../components/SearchForm"
import DrinksList from "../../components/DrinksList"
import DrinksDetailModal from "../../components/DrinksDetailModal"

const Home = () => {
  return (
    <div>
      <SearchForm/>
      <DrinksList/>
      <DrinksDetailModal/>
    </div>
  )
}

export default Home

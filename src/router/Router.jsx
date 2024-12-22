import { Routes, Route } from "react-router";
import Recipe from '../pages/Recipe'
import HomePage from '../pages/HomePage'
import ProductPage from "../pages/ProductPage";
import MainLayout from "../Layout/MainLayout";
import About from "../pages/About"

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/recipe" element={<Recipe/>} />
        <Route path="/about" element={<About/>} />

      </Route>

    </Routes>
  )
}

export default Router
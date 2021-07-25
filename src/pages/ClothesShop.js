import React, { useState, useEffect } from "react";
import "../App.css";
import Data from "../data/Data";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Search from "../components/Search";
import Navbar from "../components/Navbar";

const ClothesShop = () => {
  const allCategories = ["all", ...new Set(Data.map((item) => item.category))];

  const [items, setItems] = useState(Data);
  const [categories] = useState(allCategories);

  /* filtrerar items om vi trycker all knappen laddar vi alla produkter */
  const filterItems = (category) => {
    if (category === "all") {
      setItems(Data);
      return;
    }
    /* filtrerar items om vi trycker vald kategori via knappar laddar vi den kategorins kläder */
    const newItems = Data.filter((item) => item.category === category);
    setItems(newItems);
  };

  /* sök på en specifik vara */
  const searchItem = (category) => {
    if (category === "") {
      setItems(Data);
      return;
    }
    const newItems = Data.filter(
      (item) => item.title.toLowerCase() === category
    );
    setItems(newItems);
  };

  /* gör att sidan ej laddar om när vi trycker på knapparna*/
  useEffect(() => {
    console.log("Clothes webshop opened");
  }, []);

  return (
    <div className="starsWEB">
      <main>
        <Navbar />
        <section className="menu-section">
          <p className="anim-circle"></p>
          <div className="title">
            <h1> Clothes</h1>
          </div>
          <div className="underline"></div>
          <Search categories={categories} filterItems={searchItem} />
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={items} />
          <div className="underline-bottom"></div>
        </section>
      </main>
    </div>
  );
};

export default ClothesShop;

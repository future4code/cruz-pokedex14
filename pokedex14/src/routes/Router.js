import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pokedexpage from "../pages/PokedexPage/Pokedexpage";
import Homepage from "../pages/Homepage/Homepage";
import Detailspage from "../pages/DetailsPage/DetailsPage";
import Header from "../components/Header";
import Home from "../images/home.png";
import Pokedex from "../images/pokedex.png";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header titulo="Homepage" imagem2={Pokedex} />
          <Homepage />
        </Route>
        <Route exact path="/pokedex">
          <Header titulo="Pokedex" imagem1={Home} />
          <Pokedexpage />
        </Route>
        <Route exact path="/pokemon/:name">
          <Header titulo="Pokemon Details" imagem1={Home} imagem2={Pokedex} />
          <Detailspage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

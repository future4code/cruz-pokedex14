export const goToHomePage = (history) => {
  history.push("/");
};

export const goToPokedex = (history) => {
  history.replace("/pokedex");
};

export const goToDetailspage = (history, name) => {
  history.push(`/pokemon/${name}`);
};

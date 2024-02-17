export const fetchCoffees = async () => {
  try {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot',

    );
    const data = await resp.json();
    const espressos = data.filter(dat => dat.ingredients.includes("Espresso"))
    return espressos
  } catch (error) {
    console.error(error)
  }
}

export const drinkOfTheDay = async () => {
  try {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    const espressos = data.filter(dat => dat.ingredients.includes("Espresso"))
    return espressos[0];
  } catch (error) {
    console.error(error);
  }
};
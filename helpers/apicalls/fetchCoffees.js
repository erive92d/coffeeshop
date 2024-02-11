export const fetchCoffees = async () => {
    try {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot',

        );
        const data = await resp.json();
        return data

    } catch (error) {
        console.error(error)
    }
}

export const drinkOfTheDay = async () => {
  try {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    const data = await resp.json();
    return data[0];
  } catch (error) {
    console.error(error);
  }
};
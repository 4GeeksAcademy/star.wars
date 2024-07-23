// flux.js
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            fetchData: async () => {
                try {
                    const [peopleRes, vehiclesRes, planetsRes] = await Promise.all([
                        fetch("https://www.swapi.tech/api/people/"),
                        fetch("https://www.swapi.tech/api/vehicles/"),
                        fetch("https://www.swapi.tech/api/planets/"),
                    ]);
                    const [peopleData, vehiclesData, planetsData] = await Promise.all([
                        peopleRes.json(),
                        vehiclesRes.json(),
                        planetsRes.json(),
                    ]);

                    setStore({
                        people: peopleData.results,
                        vehicles: vehiclesData.results,
                        planets: planetsData.results,
                    });
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            },
        },
    };
};

export default getState;

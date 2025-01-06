export const getMarvelHeroList = async () => {
  try {
    const response = await fetch(
      "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9f40709213062a89659b5a21fe06e494&hash=93bc794f20ec9af703d80fb042250d72",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Failed to fetch heroes list:", error);
    throw error;
  }
};

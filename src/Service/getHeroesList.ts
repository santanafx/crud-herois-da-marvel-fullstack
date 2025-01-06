export const getHeroesList = async () => {
  try {
    const response = await fetch(
      "https://crud-herois-da-marvel-backend-01.vercel.app/heroes",
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

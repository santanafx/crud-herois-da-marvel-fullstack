export const updateHero = async (
  id: string,
  name: string,
  abilities: string,
  origin: string,
  image: string
) => {
  try {
    const response = await fetch(
      `https://crud-herois-da-marvel-backend-01.vercel.app/heroes/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          abilities,
          origin,
          image,
        }),
      }
    );

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Failed to update hero:", error);
    throw error;
  }
};

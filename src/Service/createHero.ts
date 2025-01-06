export const createHero = async (
  name: string,
  abilities: string,
  origin: string,
  image: string
) => {
  try {
    const response = await fetch(
      "https://crud-herois-da-marvel-backend-01.vercel.app/heroes",
      {
        method: "POST",
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
    console.error("Failed to create hero:", error);
    throw error;
  }
};

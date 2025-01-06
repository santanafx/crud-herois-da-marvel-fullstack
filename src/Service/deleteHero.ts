export const deleteHero = async (id: string) => {
  try {
    const response = await fetch(
      `https://crud-herois-da-marvel-backend-01.vercel.app/heroes/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    console.error("Failed to delete hero:", error);
    throw error;
  }
};

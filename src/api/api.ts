import { LeadType } from "../type";


const token = import.meta.env.VITE_API_TOKEN
  
const subDomain = "aloygol";
const permanentPart = ".amocrm.ru/api/v4/";
const baseUrl = `https://${subDomain + permanentPart}`;

export const getData = async (direction: string, id?: string) => {
  let result: LeadType[] = [];
  let additionalPath = "";

  if (id) {
    additionalPath = `/${id}`;
  }

  try {
    const response = await fetch(baseUrl + direction + additionalPath, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    result = data._embedded;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
  return result;
};

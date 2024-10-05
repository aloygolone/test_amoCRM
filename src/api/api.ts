import { LeadType } from "../type";

const token = import.meta.env.VITE_API_TOKEN;

const subDomain = "aloygoldouble";
const permanentPart = ".amocrm.ru/api/v4/";
const baseUrl = `https://${subDomain + permanentPart}`;

export const getData = async (direction: string) => {
  let result: LeadType[] = [];
  let page = 1;
  let hasMoreData = true;
  const limit = 3;

  do {
    try {
      const response = await fetch(
        baseUrl + direction + `?limit=${limit}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const data = await response.json();
      result = result.concat(data._embedded[direction]);

      if (!data._links.next) {
        hasMoreData = false;
      }

      page++;

      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      hasMoreData = false;
    }
  } while (hasMoreData);

  return result;
};

export const getDataById = async (direction: string, id: number) => {
  let result: LeadType | null = null;

  try {
    const response = await fetch(baseUrl + direction + `/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    result = data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }

  return result;
};

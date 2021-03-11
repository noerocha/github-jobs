// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { API_URL } from "../../lib/api";

export default async ({ body }: NextApiRequest, res: NextApiResponse) => {
  const { term, fulltime, location, page } = JSON.parse(body);
  let query = "";
  if (term) {
    query += `&search=${term}`;
  }

  if (fulltime) {
    query += `&fulltime=true`;
  }

  if (location) {
    query += `&location=${location.replace(" ", "+")}`;
  }

  if (page) {
    query += `&page=${page}`;
  }

  if (query.length) {
    query = query.substring(1);
  }

  try {
    const data = await fetch(`${API_URL}.json?${query}`);
    const json = await data.json();
    res.status(200).json(json);
  } catch (error) {
    res.status(500).json({ error });
  }
};

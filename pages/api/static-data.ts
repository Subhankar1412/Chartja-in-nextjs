import { NextApiRequest, NextApiResponse } from "next";
import path from 'path';
import { promises as fs } from 'fs';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    //Return the content of the data file in json format
    res.status(200).json(fileContents);
}
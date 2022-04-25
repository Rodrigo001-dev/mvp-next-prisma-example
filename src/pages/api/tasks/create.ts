import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async function (request: NextApiRequest, response: NextApiResponse) {
  const { title } = request.body;

  await prisma.task.create({
    data: {
      title,
      isDone: false
    }
  });

  return response.status(201).json({});
};
import { Request } from 'express';

export const validateEntry = (req: Request) => {
  const { entry } = req.body;
  return (
    entry && entry[0]?.changes &&
    entry[0]?.changes[0]?.value?.messages
  );
};
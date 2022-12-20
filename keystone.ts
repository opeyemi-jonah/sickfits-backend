import { config } from '@keystone-6/core';
import { lists } from './schemas/schema';
import { withAuth, session } from './auth';
import * as dotenv from 'dotenv'

dotenv.config();


export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL ?? '',
    },
    lists,
    session,
  })
);

console.log(process.env.DATABASE_URL)
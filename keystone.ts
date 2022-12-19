import { config } from '@keystone-6/core';
import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: 'postgres://opeyemi:Password123!@localhost:5432/SickFits',
    },
    lists,
    session,
  })
);

// Welcome to your schema
//   Schema driven development is Keystone's modus operandi

import { User } from './User';
import type { Lists } from '.keystone/types';
import { session } from '../auth';

export const lists: Lists = {
User,

};

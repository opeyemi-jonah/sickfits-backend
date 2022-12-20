// Welcome to your schema
//   Schema driven development is Keystone's modus operandi

import { User } from './User';
import type { Lists } from '.keystone/types';
import { Product } from './Product';

export const lists: Lists = {
User,
Product,
};

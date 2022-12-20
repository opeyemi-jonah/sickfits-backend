import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { password, text, timestamp } from '@keystone-6/core/fields';
import { servicesVersion } from 'typescript';
import { session } from '../auth';

export const User =  list({
    ui:{
        isHidden: ({session}) => {
            return !session.data;
        }
      },
    access: allowAll,
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),
      password: password({ validation: { isRequired: true } }),
      createdAt: timestamp({
        defaultValue: { kind: 'now' },
      }),
      //TODO, add roles, cart and orders
    },
  })
import { DatabaseContext } from '../instance';

export default {
    identifier: '08_addLives',

    async up({ regular: { db } }: DatabaseContext): Promise<void> {
        await db.collection('lives').createIndex({ firstName: 1, lastName: 1 }, { unique: true });
    },
};

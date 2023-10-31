import { User } from './interface';

export const admin: User = {
    id: 1,
    name: 'Zongbin',
    email: 'nguyentrangadmediaagc@gmail.com',
    avatar: './assets/images/avatar.jpg',
    permissions: 'admin',
};

export const guest: User = {
    name: 'unknown',
    email: 'unknown',
    avatar: './assets/images/avatar-default.jpg',
};

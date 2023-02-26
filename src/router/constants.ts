import { Error403, Error404 } from '@/assets';

export const ErrorState = {
  notFound: {
    name: 'Not Found',
    content: '이런, 페이지를 찾을 수 없습니다.',
    image: Error404,
    number: 404,
  },
  forbidden: {
    name: 'Forbidden',
    content: '이 페이지에 대한 접근권한이 존재하지 않습니다.',
    image: Error403,
    number: 403,
  },
} as const;

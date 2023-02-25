import { GetCompanyProfileListResponseType } from '@scouit/api-types';
import { instance } from '..';
import { url } from './getProfile';
import { EditType } from './type';

export const patchUserProfile = <T>(type: EditType, text: T) => typeAxios<T>(type, text);

const typeAxios = async <T>(type: EditType, text: T) => {
  await instance.patch<T>(
    `/profile/write?type=${url(type)}`,
    { [type]: text },
    {
      headers: {
        authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    },
  );
};

import { LinkProps } from 'react-router-dom';
import { PageListType } from './constants';

/** 추후 라이브러리를 확장해서 타입지정을 하는 과정이 필요해보임 */
interface PropsType extends LinkProps {
  to: PageListType;
}

export const Link = (props: PropsType) => <Link {...props} />;

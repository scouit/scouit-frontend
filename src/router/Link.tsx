import { LinkProps } from 'react-router-dom';
import { PAGE_LIST } from './constants';

/** 추후 라이브러리를 확장해서 타입지정을 하는 과정이 필요해보임 */
interface PropsType extends LinkProps {
  to: (typeof PAGE_LIST)[number];
}

export const Link = (props: PropsType) => <Link {...props} />;

import { Link as RouterLink, type LinkProps } from 'react-router';
import './Link.css';

export const Link = ({ className, ...props }: LinkProps) => {
    return <RouterLink className={className ? `link ${className}` : 'link'} {...props} />;
};

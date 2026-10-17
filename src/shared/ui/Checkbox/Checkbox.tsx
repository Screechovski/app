import type { InputHTMLAttributes } from 'react';

export const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input type="checkbox" {...props} />;
};

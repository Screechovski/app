import type { InputHTMLAttributes } from 'react';

export const RadioButton = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <input type="radio" {...props} />;
};

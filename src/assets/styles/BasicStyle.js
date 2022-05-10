import { css } from 'twin.macro';

export const focusStyleBorderPurple = () => css`
    &:focus {
    border: 1px solid rgb(192 132 252);
    box-shadow: 0 0 0 1px rgb(192 132 252);
    }
`;

export const maxWidthHalf = () => css`
    max-width: 50%;
`
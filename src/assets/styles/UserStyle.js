import tw, { styled } from 'twin.macro';
import { focusStyleBorderPurple } from './BasicStyle';

export const UserMain = tw.div`w-full h-full flex justify-center items-start`;
export const UserTitleItems = tw.div`w-full p-8 text-center`;
export const UserTitleAnchor = tw.a`text-4xl font-bold cursor-pointer`;
export const UserTitleItem = tw.div`pt-4`;
export const UserTitleLabel = tw.label`text-2xl font-thin`;

export const UserFormContainer = tw.div`w-full bg-gray-50 shadow rounded-md p-4`;
export const UserFormItem = tw.div`w-full p-2`;
export const UserFormItemLabel = tw.label`text-sm text-gray-600`;
export const UserFormItemInput = styled.input(() => [
    tw`w-full border border-solid border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border focus:ring-0`,
    focusStyleBorderPurple(),
]);

export const UserFormItemButtons = tw.div`flex justify-center items-center`;
export const UserFormItemSubmitButton = tw.button`w-full rounded-md border text-center cursor-pointer`;
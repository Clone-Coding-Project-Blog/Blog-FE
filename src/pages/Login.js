//
import { useForm } from 'react-hook-form';

//
import tw from 'twin.macro';

//
import {
    UserMain,
    UserTitleItems,
    UserTitleAnchor,
    UserTitleItem,
    UserTitleLabel,
    UserFormContainer,
    UserFormItem,
    UserFormItemLabel,
    UserFormItemInput,
    UserFormItemButtons,
    UserFormItemSubmitButton,
} from '../assets/styles/UserStyle';


const LoginFormItemSubmitButton = tw(UserFormItemSubmitButton)`bg-gray-200 p-2 hover:bg-gray-300`
const LoginFormItemSocialLink = tw.a`w-full bg-gray-200 p-2 rounded-md border text-center cursor-pointer hover:bg-gray-300`;

const DivideLine = tw.hr`m-2`;
const LoginFormRegisterButton = tw.div`flex justify-end items-center text-sm text-gray-600 font-thin`;
const LoginFormRegisterAnchor = tw.a`p-2 border rounded-md bg-gray-200 text-gray-400 cursor-pointer hover:bg-gray-300`;


function Login() {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onValid = () => {

    }

    return(
        <UserMain>
            <div>
                <UserTitleItems>
                    <div>
                        <UserTitleAnchor href="/">Mizzle</UserTitleAnchor>
                    </div>
                    <UserTitleItem>
                        <UserTitleLabel>계정 로그인</UserTitleLabel>
                    </UserTitleItem>
                </UserTitleItems>

                <UserFormContainer>
                    <form onSubmit={handleSubmit(onValid)}>
                        <UserFormItem>
                            <UserFormItemLabel htmlFor="username">아이디</UserFormItemLabel>
                            <UserFormItemInput
                                { ...register("username", { required: "아이디를 입력해 주세요." }) }
                                type="text"
                            />
                        </UserFormItem>
                        <UserFormItem>
                            <UserFormItemLabel htmlFor="password">비밀번호</UserFormItemLabel>
                            <UserFormItemInput
                                { ...register("password", { required: "비밀번호를 입력해 주세요." }) }
                                type="password"
                            />
                        </UserFormItem>

                        <UserFormItem>
                            <UserFormItemButtons>
                                <LoginFormItemSubmitButton>로그인</LoginFormItemSubmitButton>
                            </UserFormItemButtons>
                        </UserFormItem>
                        
                        <UserFormItem>
                            <UserFormItemButtons>
                                <LoginFormItemSocialLink>구글 로그인</LoginFormItemSocialLink>
                            </UserFormItemButtons>
                        </UserFormItem>
                        <UserFormItem>
                            <UserFormItemButtons>
                                <LoginFormItemSocialLink>카카오톡 로그인</LoginFormItemSocialLink>
                            </UserFormItemButtons>
                        </UserFormItem>
                        <UserFormItem>
                            <UserFormItemButtons>
                                <LoginFormItemSocialLink>네이버 로그인</LoginFormItemSocialLink>
                            </UserFormItemButtons>
                        </UserFormItem>

                        <DivideLine />

                        <UserFormItem>
                            <LoginFormRegisterButton>
                                <LoginFormRegisterAnchor href="/user/create">회원가입</LoginFormRegisterAnchor>
                            </LoginFormRegisterButton>
                        </UserFormItem>
                    </form>
                </UserFormContainer>
            </div>
        </UserMain>
    );
}

export default Login;
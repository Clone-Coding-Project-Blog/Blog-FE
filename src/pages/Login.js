import { useForm } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

const LoginMain = tw.div`w-full h-full flex justify-center items-start`
const LoginTitleItems = tw.div`w-full p-8 text-center`;
const LoginTitleAnchor = tw.a`text-4xl font-bold cursor-pointer`;
const LoginTitleItem = tw.div`pt-4`;
const LoginTitleLabel = tw.label`text-2xl font-thin`;

const LoginFormContainer = tw.div`w-full bg-gray-50 shadow rounded-md p-4`;
const LoginFormItem = tw.div`w-full p-2`;
const LoginFormItemLabel = tw.label`text-sm text-gray-600`;
const LoginFormItemInput = styled.input`
    ${() => tw`w-full border border-solid border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border focus:ring-0`}
    &:focus {
      border: 1px solid rgb(192 132 252);
      box-shadow: 0 0 0 1px rgb(192 132 252);
    }
`;
const LoginFormItemButtons = tw.div`flex justify-center items-center`;
const LoginFormItemSubmitButton = tw.button`w-full bg-gray-200 p-2 rounded-md border text-center cursor-pointer hover:bg-gray-300`;
const LoginFormItemSocialLink = tw.a`w-full bg-gray-200 p-2 rounded-md border text-center cursor-pointer hover:bg-gray-300`;

const DivideLine = tw.hr`m-2`;
const LoginFormRegisterButton = tw.div`flex justify-end items-center text-sm text-gray-600 font-thin`;
const LoginFormRegisterAnchor = tw.a`p-2 border rounded-md bg-gray-200 text-gray-400 cursor-pointer hover:bg-gray-300`;


function Login() {
    const { register, setValue, formState: { errors }, handleSubmit } = useForm();

    const onValid = () => {

    }

    return(
        <LoginMain>
            <div>
                <LoginTitleItems>
                    <div>
                        <LoginTitleAnchor href="#">Mizzle</LoginTitleAnchor>
                    </div>
                    <LoginTitleItem>
                        <LoginTitleLabel>계정 로그인</LoginTitleLabel>
                    </LoginTitleItem>
                </LoginTitleItems>

                <LoginFormContainer>
                    <form onSubmit={handleSubmit(onValid)}>
                        <LoginFormItem>
                            <LoginFormItemLabel htmlFor="username">아이디</LoginFormItemLabel>
                            <LoginFormItemInput
                                { ...register("username", { required: "아이디를 입력해 주세요." }) }
                                type="text"
                            />
                        </LoginFormItem>
                        <LoginFormItem>
                            <LoginFormItemLabel htmlFor="password">아이디</LoginFormItemLabel>
                            <LoginFormItemInput
                                { ...register("password", { required: "비밀번호를 입력해 주세요." }) }
                                type="password"
                            />
                        </LoginFormItem>
                        <LoginFormItem>
                            <LoginFormItemButtons>
                                <LoginFormItemSubmitButton>로그인</LoginFormItemSubmitButton>
                            </LoginFormItemButtons>
                        </LoginFormItem>
                        
                        <LoginFormItem>
                            <LoginFormItemButtons>
                                <LoginFormItemSocialLink>구글 로그인</LoginFormItemSocialLink>
                            </LoginFormItemButtons>
                        </LoginFormItem>
                        <LoginFormItem>
                            <LoginFormItemButtons>
                                <LoginFormItemSocialLink>카카오톡 로그인</LoginFormItemSocialLink>
                            </LoginFormItemButtons>
                        </LoginFormItem>
                        <LoginFormItem>
                            <LoginFormItemButtons>
                                <LoginFormItemSocialLink>네이버 로그인</LoginFormItemSocialLink>
                            </LoginFormItemButtons>
                        </LoginFormItem>

                        <DivideLine />

                        <LoginFormItem>
                            <LoginFormRegisterButton>
                                <LoginFormRegisterAnchor href="#">회원가입</LoginFormRegisterAnchor>
                            </LoginFormRegisterButton>
                        </LoginFormItem>
                    </form>
                </LoginFormContainer>
            </div>
        </LoginMain>
    );
}

export default Login;
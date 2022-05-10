//
import { useForm } from 'react-hook-form';

//
import tw from 'twin.macro';

//
import {
    UserFormContainer,
    UserFormItem,
    UserFormItemButtons,
    UserFormItemInput,
    UserFormItemLabel,
    UserFormItemSubmitButton,
    UserMain,
    UserTitleAnchor,
    UserTitleItem,
    UserTitleItems,
    UserTitleLabel,
} from '../assets/styles/UserStyle';


const RegisterFormSubmitButton = tw(UserFormItemSubmitButton)`bg-gray-100 p-2 hover:bg-gray-200`;


function Register() {
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
                        <UserTitleLabel>회원 가입</UserTitleLabel>
                    </UserTitleItem>
                </UserTitleItems>

                <UserFormContainer>
                    <form onSubmit={handleSubmit(onValid)}>
                        <UserFormItem>
                            <UserFormItemLabel htmlFor="username">
                                아이디
                            </UserFormItemLabel>
                            <UserFormItemInput
                                { ...register("username", { required: "아이디를 입력해 주세요." }) }
                                type="text"
                            />
                        </UserFormItem>
                        <UserFormItem>
                            <UserFormItemLabel htmlFor="password">
                                비밀번호
                            </UserFormItemLabel>
                            <UserFormItemInput
                                { ...register("password", { required: "비밀번호를 입력해 주세요." }) }
                                type="password"
                            />
                        </UserFormItem>
                        <UserFormItem>
                            <UserFormItemLabel htmlFor="confirmPassword">
                                비밀번호 확인
                            </UserFormItemLabel>
                            <UserFormItemInput
                                { ...register("confirmPassword", { required: "비밀번호를 입력해 주세요." }) }
                                type="password"
                            />
                        </UserFormItem>

                        <UserFormItem>
                            <UserFormItemButtons>
                                <RegisterFormSubmitButton>
                                    회원가입
                                </RegisterFormSubmitButton>
                            </UserFormItemButtons>
                        </UserFormItem>
                    </form>
                </UserFormContainer>
            </div>
        </UserMain>
    );
}

export default Register;
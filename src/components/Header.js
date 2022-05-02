import { Disclosure, Menu, Transition } from '@headlessui/react';

import tw, { styled } from 'twin.macro';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const MainHeader = styled.div`
  z-index: 100;
  ${() => tw`fixed inset-x-0 top-0`}
`;
const HeaderBackground = tw.div`bg-white flex items-center justify-between w-full p-2 shadow`;

const HeaderTitle = tw.div`p-2 text-3xl font-bold`;
const HeaderItems = tw.div`p-2 flex items-center invisible md:visible`;

const HeaderSearchItems = tw.div`flex pl-2`;
const HeaderSearchInput = styled.input`
  outline-color: #d1d5db;
  ${() => tw`border border-solid border-gray-300 rounded-l-md h-8 pl-2`}
`;
const HeaderSearchButton = tw.button`p-2 bg-gray-200 rounded-r-md h-8`;
const HeaderSearchIcon = tw(FiSearch)`h-4 w-4`;

const AuthUserName = tw.div`relative inline-block text-left`;

const LoginLinkButton = tw.a`font-bold text-sm ml-2 px-4 py-1 h-8 bg-gray-200 rounded-md hover:bg-gray-300`;


function Header() {
    //TODO
    //임시 로그인 스테이트
    const [isAuth, setIsAuth] = useState(true);
    const userName = "mizzle";

    return(
        <header>
            <MainHeader>
                <HeaderBackground>
                    <HeaderTitle>
                        <a>Mizzle</a>
                    </HeaderTitle>

                    <HeaderItems>
                        <HeaderSearchItems>
                            <HeaderSearchInput type="text" placeholder="검색" />
                            <HeaderSearchButton>
                                <HeaderSearchIcon />
                            </HeaderSearchButton>
                        </HeaderSearchItems>

                        {isAuth ? (
                            <Menu as="div">
                                <AuthUserName>

                                </AuthUserName>
                            </Menu>
                        ):(
                            <div>
                                <LoginLinkButton>로그인</LoginLinkButton>
                            </div>
                        )}
                    </HeaderItems>
                </HeaderBackground>
            </MainHeader>
        </header>
    );
}

export default Header;
//
import { useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

//
import tw, { styled } from 'twin.macro';
import { FiSearch } from 'react-icons/fi';
import { HiChevronDown } from 'react-icons/hi';


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

const AuthShowItems = tw.div`relative inline-block text-left`;
const AuthUserName = tw.p`px-2 truncate`;
const AuthDownDropMenuButton = tw(Menu.Button)`
    flex justify-between items-center font-bold text-sm ml-2 px-2 py-1 h-8 bg-gray-200 rounded-md w-24 hover:bg-gray-300 cursor-pointer
`;
const AuthDownDropMenuButtonIcon = tw(HiChevronDown)`h-5 w-5`;

const DownDropItems = tw(Menu.Items)`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`;
const DownDropItem = tw(Menu.Item)`py-1`;
const DwonDropItemLink = tw.a`text-gray-700 block px-4 py-2 text-sm`;

const LoginLinkButton = tw.a`font-bold text-sm ml-2 px-4 py-1 h-8 bg-gray-200 rounded-md hover:bg-gray-300`;


function Header() {
    //TODO
    //임시 로그인 스테이트
    const [isAuth, setIsAuth] = useState(true);
    const userName = "Mizzle";

    return(
        <header>
            <MainHeader>
                <HeaderBackground>
                    <HeaderTitle>
                        <a href="#">Mizzle</a>
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
                                <AuthShowItems>
                                    <AuthDownDropMenuButton>
                                        <AuthUserName>{ userName }</AuthUserName>
                                        <AuthDownDropMenuButtonIcon />
                                    </AuthDownDropMenuButton>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <DownDropItems>
                                            <DownDropItem>
                                                <DwonDropItemLink href="#">글쓰기</DwonDropItemLink>
                                            </DownDropItem>
                                            <DownDropItem>
                                                <DwonDropItemLink href="#">게시글 목록</DwonDropItemLink>
                                            </DownDropItem>
                                            <DownDropItem>
                                                <DwonDropItemLink href="#">회원탈퇴</DwonDropItemLink>
                                            </DownDropItem>
                                            <DownDropItem>
                                                <DwonDropItemLink href="#">로그아웃</DwonDropItemLink>
                                            </DownDropItem>
                                        </DownDropItems>
                                    </Transition>
                                </AuthShowItems>
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
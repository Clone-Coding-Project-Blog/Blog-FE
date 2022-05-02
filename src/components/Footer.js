import tw from 'twin.macro';


const FooterStyleDiv = tw.div`z-0 fixed invisible md:visible inset-x-0 bottom-0 flex items-center justify-center w-full p-2 text-gray-300`;

function Footer() {
    return(
        <footer>
            <FooterStyleDiv>
                <label> Copyright © 2022 Mizzle Inc. Policy Edit page on
                        GitHub </label>
            </FooterStyleDiv>
        </footer>
    );
}

export default Footer;
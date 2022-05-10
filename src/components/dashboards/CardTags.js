//
import tw from 'twin.macro';

//
const TagsContainer = tw.div`flex py-2 justify-start items-center h-12 w-full truncate`;
const TagBackground = tw.div`border rounded-full mr-1 my-2 px-2 border-2 text-sm bg-gray-200 text-gray-600 truncate`;
const TagText = tw.label`cursor-pointer w-full truncate`;

function CardTags({ props }) {
    /*
    * props = Array()
    * */
    return (
        <>
            <TagsContainer>
                { props.slice(0, 5).map(tag => (
                    <TagBackground key={tag.key}>
                        <TagText>{ tag.name }</TagText>
                    </TagBackground>
                )) }
                {props.length > 5 && (
                    <TagText>...</TagText>
                )}
            </TagsContainer>
        </>
    );
}

export default CardTags;
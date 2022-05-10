//
import tw, { styled } from 'twin.macro';

//
import CardTags from './CardTags';
import { maxWidthHalf } from '../../assets/styles/BasicStyle';

const BoardCard = tw.div`cursor-pointer w-full h-72 p-2 bg-white rounded-md shadow hover:ring hover:ring-gray-300`;
const CardTitle = tw.div`px-2 pt-2 font-semibold text-xl text-center rounded-md truncate bg-white text-black`;
const CardSubTitle = tw.div`py-1 text-center text-base text-gray-400 truncate border-b border-solid border-gray-200`;
const CardContents = tw.div`p-2 text-sm text-gray-600 truncate h-24 break-words`;
const CardContentText = tw.div`text-sm`;

const CardWrittenInfo = tw.div`flex justify-between items-center p-2 text-xs text-left border-t border-solid border-gray-200 w-full truncate space-x-2`;
const CardCreateDate = styled.div(() => [
    tw`text-right py-2 text-xs text-gray-400 whitespace-nowrap truncate`,
    maxWidthHalf(),
]);
const CardUserName = styled.label(() => [
    tw`cursor-pointer text-gray-600 truncate`,
    maxWidthHalf(),
]);

function Card({ props }) {
    /*
    * props = {
    *   title,
    *   subtitle,
    *   html,
    *   createDate,
    *   tags
    *   username
    * }
    * */

    return (
        <BoardCard>
            <CardTitle>{ props.title }</CardTitle>
            <CardSubTitle>{ props.subtitle }</CardSubTitle>

            <CardContents>
                <CardContentText>
                    { props.html }
                </CardContentText>
            </CardContents>

            <CardTags props={props.tags}/>

            <CardWrittenInfo>
                <CardUserName>{ props.username }</CardUserName>
                <CardCreateDate>{ props.createDate }</CardCreateDate>
            </CardWrittenInfo>
        </BoardCard>
    );
}

export default Card;
import React, {useEffect, useState} from "react"
import { useParams } from "react-router";
import { addComment, content } from "../modules/comment"
import {CommentContainer , TopContainer , P
,ContentContainer, CommentInputWrapper, CommentInput, ImgWrapper, ImgButton, ImgDeleteButton, ImgInput
,BottomContainer, AddButton
,PreviewWrapper, PreviewContainer,Img
} from '../styles/CommentStyles'

import { useDispatch, useSelector } from "react-redux";

import CommentList from "./CommentList";

function Comment(){
    
    const dispatch = useDispatch()

    const [ img, setImg ] = useState([])
    const [previewImg,setPreviewImg] = useState([])

    const insertImg = (e) =>{
        let reader = new FileReader()

        if(e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
            setImg([...img, e.target.files[0]])

        }
        
        reader.onloadend = () => {
            const previewImgUrl = reader.result

        if(previewImgUrl) {
            setPreviewImg([...previewImg, previewImgUrl])
            }
        }
        console.log(e.target.files[0])

    }

    const deleteImg = (index) => {
        const imgArr = img.filter((el, idx) => idx !== index)
        const imgNameArr = previewImg.filter((el, idx) => idx !== index )
    
        setImg([...imgArr])
        setPreviewImg([...imgNameArr])
    }

    const getPreviewImg = () => {
        if(img === null || img.length ===0) {
            return (
                <>
                </>
            )
        }
        else {
            return img.map((el, index) => {
                return (
                    <>
                    <Img src={previewImg[index]} alt='x' />
                    <ImgDeleteButton onClick={()=>deleteImg(index)}>
                    x
                    </ImgDeleteButton>
                    </>
                )
            })
        }
    }

    const fileInput = React.createRef(null)

    const handleButtonClick =(e)=> {
        fileInput.current.click()
    }

    /*redux 값 */
    const commentList = useSelector((state) => state.comment.commentList)
    const comment = useSelector((state) => state.comment.commentInput)

    const {id , animal} = useParams()

    //물품 고유번호
    const proId = animal.concat(id)

    const [num,setNum] = useState(0)
    
    console.log(commentList)


    // commentList.filter((item)=>item.proId === proId)
    // .map(()=> (setNum(num+1)))

    return(
        <>
            <CommentContainer>

                {commentList.length >= 1 ?
                commentList
                    .filter((item) => item.proId === proId)
                    .map((item,index)=> (<CommentList item={item} key={item.index} index={index}/> ))
                :
                    <p>댓글 없음</p>
        
                }

                <TopContainer>
                    <P>
                        {CommentList.index}개
                    </P>
                </TopContainer>
                
                <ContentContainer>
                    <CommentInputWrapper> 
                        <CommentInput 
                            type='text'
                            placeholder="댓글을 입력해주세요"
                            onChange={(event)=> dispatch(content(event.target.value))}
                            value={comment}
                        /> 
                    </CommentInputWrapper>
                </ContentContainer>

                <BottomContainer>
                    <ImgWrapper>
                    <ImgButton onClick={handleButtonClick}> 사진 추가 </ImgButton>        

                        <ImgInput
                            type="file"
                            id='file'
                            accept='image/*' 
                            ref={fileInput}
                            onChange={(e)=>insertImg(e)}
                        />

                    <AddButton onClick={()=>{dispatch(addComment(
                        comment,
                        previewImg,
                        proId,
                        'userId'
                        
                        ))
                        setImg([])
                        setPreviewImg([])
                        }}>
                        댓글작성 
                    </AddButton>      
                    
                    </ImgWrapper>

                    <PreviewWrapper>
                        <PreviewContainer>
                            {getPreviewImg()}
                        </PreviewContainer>
                    </PreviewWrapper>




                </BottomContainer>

            </CommentContainer>
        </>
    )
}

export default Comment

import React, { useMemo, useState,useRef, useEffect} from "react"
import { useParams } from "react-router";
import { addComment, content } from "../modules/comment"
import {CommentContainer , TopContainer , Span, ReviewCountButton, ReviewCountButtonWrapper
,ContentContainer, CommentInputWrapper, CommentInput, ImgWrapper, ImgButton, ImgDeleteButton, ImgInput
,BottomContainer, AddButton
,PreviewWrapper, PreviewContainer,Img,
} from '../styles/CommentStyles'

import { useDispatch, useSelector } from "react-redux";

import CommentList from "./CommentList";

import userData from '../json/User.json'

/*toastify*/

import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
    useEffect(()=>{
        commentList.sort((a, b) => a.key-b.key).reverse()
    },[])
    
    const {id , animal} = useParams()

    //물품 고유번호
    
    const proId = animal.concat(id)

    
    const commentNumbers = commentList.filter(item => item.proId === proId).length

    const userId = useSelector((state)=> state.login.id)
    
    const name = useSelector((state)=> state.login.name)

    const notifyComment = () => {
        toast(`로그인이 필요합니다.`)
    }

    const [color, setColor] = useState('#887674');

    const [toggleStatus, setToggleStatus] = useState('off')

    const toggleButtonColor = () => {
        color === '#887674' ? setColor('#000000') : setColor('#887674');
    };

    const toggleButtonStatus = () => {
        toggleStatus === 'off' ? setToggleStatus('on') : setToggleStatus('off');
        toggleStatus === 'off' ? commentList.sort((a, b) => b.likeStatus.length - a.likeStatus.length) : commentList.sort((a, b) => a.key-b.key).reverse();
    };    

    const key = useSelector((state)=> state.comment.commentKey)

    console.log(key)
    return(
        <>
            <CommentContainer>
                <TopContainer>
                    <Span ReviewCount> 
                        {commentNumbers} 개의 후기
                        {commentList.length >= 1 ?
                            <ReviewCountButton color={color} 
                                onClick={()=>{
                                    toggleButtonColor()
                                    toggleButtonStatus()
                                    
                                    }}>
                                    {toggleStatus ==='off' ? <Span>추천순</Span> : <Span>✔추천순</Span>}
                            </ReviewCountButton>
                            :
                            <></>
                        }
                    </Span>
                </TopContainer>



                {toggleStatus === 'off'  ?
                commentList
                    .filter((item) => item.proId === proId)
                    .map((item)=> (<CommentList item={item} key={item.key} /> ))
                
                :
                commentList
                    .filter((item) => item.proId === proId)
                    .map((items,index)=> (<CommentList item={items} key={items.key} index={index}/> ))
        
                }

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

                    <AddButton onClick={()=>{
                        if (!userId){
                            notifyComment()
                        }
                        else {
                        dispatch(addComment(
                        comment,
                        previewImg,
                        proId,
                        userId,
                        name,
                        commentNumbers,
                        key                   
                        ))
                        setImg([])
                        setPreviewImg([])
                        }}}>
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

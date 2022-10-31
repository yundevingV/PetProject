import React, {useState} from "react"
import { useParams } from "react-router";
import { addComment, content } from "../modules/comment"
import {CommentContainer , TopContainer , P
,ContentContainer, CommentInputWrapper, CommentInput, ImgWrapper, ImgButton, ImgInput
,BottomContainer, AddButton

} from '../styles/CommentStyles'

import { useDispatch, useSelector } from "react-redux";

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
                const {name} = el
                return (
                    <div key={index}>
                    <div>
                        <img src={previewImg[index]} alt='x' />
                    </div>
                    <p>{name}</p>
                    <button onClick={()=>deleteImg(index)}>
                    x
                    </button>
                    </div>
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

    const proId = animal.concat(id)
    console.log(proId,comment)
    console.log(commentList)
    
    return(
        <>
            <CommentContainer>
                <TopContainer>
                    <P> {commentList.length} 개 의 후기 </P>
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

                    <AddButton onClick={()=>dispatch(addComment(
                        comment,
                        'img',
                        proId,
                        'userId',
                        ))}>
                        댓글작성 
                    </AddButton>      
                    
                    </ImgWrapper>




                </BottomContainer>

            </CommentContainer>
        </>
    )
}

export default Comment

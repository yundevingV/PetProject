import React, {useState} from "react"
import {CommentContainer , TopContainer , P
,ContentContainer, CommentInputWrapper, CommentInput, ImgWrapper, ImgInput
,BottomContainer, AddButton
} from '../styles/CommentStyles'

function Comment(){

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



    return(
        <>
        <form encType='multipart/form-data'>
        
        <input 
            type="file"
            id='file'
            accept='image/jpg' 
            onChange={(e)=>insertImg(e)} />
        </form>
        
        <div>
            {getPreviewImg()}
        </div>


            <CommentContainer>
                <TopContainer>
                    <P> 0개 의 후기 </P>
                </TopContainer>
                
                <ContentContainer>
                    <CommentInputWrapper> 
                        <CommentInput 
                            placeholder="댓글을 입력해주세요"
                            onChange=""
                        />
                    </CommentInputWrapper>
                </ContentContainer>

                <BottomContainer>
                    <ImgWrapper>

                        <ImgInput
                            name="imageUpload"
                            type="file"
                            accept="image/*"
                        />
                                
                    </ImgWrapper>
                    <div>
                    </div>
                    <AddButton>
                        댓글작성 
                    </AddButton>


                </BottomContainer>

            </CommentContainer>
        </>
    )
}

export default Comment

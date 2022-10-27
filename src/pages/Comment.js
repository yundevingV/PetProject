import React, {useState} from "react"
import {CommentContainer , TopContainer , P
,ContentContainer, CommentInputWrapper, CommentInput, ImgWrapper, ImgButton
,BottomContainer, AddButton
} from '../styles/CommentStyles'

function Comment(){

    const [image,setImage] = useState('')

    const saveFileImage = (event) =>{
        setImage(URL.createObjectURL(event.target.files[0]));
      };


    
    return(
        <>
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

                        <ImgButton 
                            name="imageUpload"
                            type="file"
                            accept="image/*"
                            onChange={saveFileImage}
                        />
                                
                    </ImgWrapper>
                    <div>
                        {image}
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

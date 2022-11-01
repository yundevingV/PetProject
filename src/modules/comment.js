export const ADD = "ADD"
export const CONTENT = "CONTENT"
// 4. comment- commentid(pk), content, img, pro_id(fk), user_id(fk)

export const addComment = (content,img,proId,userId) => {
    return {
        type: ADD,
        content,
        img,
        proId,
        userId
    }
}

export const content = (change) => {
    return {
        type : CONTENT,
        change
    }
}


const initialState = {
    commentList : [],
    commentInput : '',
    imgList : []
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        // 추가
        case ADD :
            return {
                commentList : [...state.commentList ,
                    {
                        content : action.content,
                        img : action.img,
                        proId : action.proId,
                        userId : action.userId
                    }
                ],
                commentInput : '',
                
            }
        case CONTENT :
            return {
                commentList : [...state.commentList],
                commentInput : action.change,
                imgList : [...state.imgList],
            }
        default :
            return {
                commentList : state.commentList,
                commentInput: state.commentInput,
                imgList : state.imgList
            }
    }
}
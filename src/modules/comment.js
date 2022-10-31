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

export const content = (contentInput) => {
    return {
        type : CONTENT,
        contentInput
    }
}


const initialState = {
    commentList : [],
    contentInput : '',
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
                contentInput : ''
            }
        case CONTENT :
            return {
                contentInput : action.contentInput
            }
        default :
            return state
    }
}
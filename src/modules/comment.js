export const ADD = "ADD"

// 4. comment- commentid(pk), content, img, pro_id(fk), user_id(fk)

export const addComment = (commentId,content,img,proId,userId) => {
    return {
        type: ADD,
        commentId,
        content,
        img,
        proId,
        userId
    }
}


const initialState = {
    commentList : [],
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        // 추가
        case ADD :
            return {
                commentList : [...state.commentList ,
                    {
                        commentId : action.commentId,
                        content : action.content,
                        img : action.img,
                        proId : action.proId,
                        userId : action.userId                    
                    }
                ],
            }
    default :
        return state
    }
}
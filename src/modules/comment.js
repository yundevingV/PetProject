export const ADD = "ADD"
export const DELETE = "DELETE"
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

export const deleteComment = () => {
    return {
        type : DELETE,
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
    
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        // 추가
        case ADD :
            return {
                commentList : [...state.commentList ,
                    {
                        content : state.commentInput,
                        img : action.img,
                        proId : action.proId,
                        userId : action.userId,
                        commentId : action.proId.concat(action.userId)
                    }
                ],
                commentInput : '',  
            }
        case DELETE :
            return {
                commentList : [...state.commentList],
                commentInput : ''
            }

        case CONTENT :
            return {
                commentList : [...state.commentList],
                commentInput : action.change,
            }
        default :
            return {
                commentList : state.commentList,
                commentInput: state.commentInput,
            }
    }
}
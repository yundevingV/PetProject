export const ADDCOMMENT = "ADDCOMMENT"
export const DELETECOMMENT = "DELETECOMMENT"
export const CONTENT = "CONTENT"
// 4. comment- commentid(pk), content, img, pro_id(fk), user_id(fk)

export const addComment = (content,img,proId,userId,name,commentUniqueNumber) => {
    return {
        type: ADDCOMMENT,
        content,
        img,
        proId,
        userId,
        name,
        commentUniqueNumber
    }
}

export const deleteComment = (item) => {
    return {
        type : DELETECOMMENT,
        item
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
        case ADDCOMMENT :
            return {
                commentList : [...state.commentList ,
                    {
                        content : state.commentInput,
                        img : action.img,
                        proId : action.proId,
                        userId : action.userId,
                        name : action.name,
                        commentId : action.proId.concat(action.userId).concat(action.commentUniqueNumber)
                    }
                ],
                commentInput : '',  
            }
        case DELETECOMMENT :
            return {
                ...state.commentList,
                commentList : state.commentList.filter((item) => item.commentId !== action.item.commentId),
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
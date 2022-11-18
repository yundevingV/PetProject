export const ADDCOMMENT = "ADDCOMMENT"
export const DELETECOMMENT = "DELETECOMMENT"
export const CONTENT = "CONTENT"
export const LIKECOMMENT = "LIKECOMMENT"

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

export const likeComment = (commentId) => {
    return {
        type : LIKECOMMENT,
        commentId
    
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
                        commentId : action.proId.concat(action.userId).concat(action.commentUniqueNumber),
                        like : 0
                    }
                ],
                commentInput : '',  
            }
        case DELETECOMMENT :
            return {
                commentList : [...state.commentList],
                commentList : state.commentList.filter((item) => item.commentId !== action.item.commentId),
                commentInput : ''
            }

        case CONTENT :
            
            return {
                commentList : [...state.commentList],                
                commentInput : action.change,
            }
        case LIKECOMMENT :

            const findCommentIdFunc = (item) => {

                if (item.commentId === action.commentId) return true
            }    

            const findIndex = state.commentList.findIndex(findCommentIdFunc)
            
            state.commentList[findIndex].like +=1

            return {
                
                commentList : [...state.commentList],                
                commentInput : state.commentInput,  
            }
            
        default :
            return {
                commentList : state.commentList,
                commentInput: state.commentInput,
            }
    }
}
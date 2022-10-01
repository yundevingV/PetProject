// Actions - Dog
export const DOG = "DOG"
export const DOGCATEGORY = "DOGCATEGORY"
export const DOG_COVER = "DOG_COVER"
export const DOG_FOOD = "DOG_FOOD"
export const DOG_SNACK = "DOG_SNACK"
export const DOG_TOY = "DOG_TOY"
export const DOG_PAD = "DOG_PAD"
export const DOG_TOOL = "DOG_TOOL"

// Actions - CAT
export const CAT = "CAT"
export const CATCATEGORY = "CATCATEGORY"
export const CAT_COVER = "CAT_COVER"
export const CAT_FOOD = "CAT_FOOD"
export const CAT_SNACK = "CAT_SNACK"
export const CAT_TOY = "CAT_TOY"
export const CAT_PAD = "CAT_PAD"
export const CAT_TOOL = "CAT_TOOL"

export const dog = () =>{
    return {
        type: DOG,
    }
}
export const dogCategory = (category) =>{
    return {
        type: DOGCATEGORY,
        category
    }
}
export const cat = () =>{
    return {
        type: CAT,
    }
}
export const catCategory = (category) =>{
    return {
        type: CATCATEGORY,
        category
    }
}

const initialState = {
    animalState : '',
    categoryState : '',
}

export default function counter(state = initialState, action) {
    switch(action.type) {
        case DOG : 
            return {
                animalState : 'dog',
                categoryState : 'dog'
            }
        case DOGCATEGORY :
            return {
                animalState : 'dog',
                categoryState : action.category
            }
        case CAT : 
            return {
                animalState : 'cat',
                categoryState : 'cat'
            }
        case CATCATEGORY :
            return {
                animalState : 'cat',
                categoryState : action.category
            }


        default :
            return {
                animalState : state.animalState,
                categoryState : state.categoryState
            }
    }

}


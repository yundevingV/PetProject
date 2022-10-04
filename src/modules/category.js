// Actions - Dog
export const DOG = "DOG"
export const DOGCATEGORY = "DOGCATEGORY"
// Actions - CAT
export const CAT = "CAT"
export const CATCATEGORY = "CATCATEGORY"

export const BEST = "BEST"

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
export const best = () =>{
    return {
        type : BEST
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
        case BEST :
            return {
                animalState : '',
                categoryState : ''
            }

        default :
            return {
                animalState : state.animalState,
                categoryState : state.categoryState
            }
    }

}


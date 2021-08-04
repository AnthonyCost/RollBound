// Action Creators

const GET_CHARACTERS = 'campaigns/GET_CHARACTERS';
const GRAB_CHARACTER = 'campaigns/GRAB_CHARACTER';


const getCharacters = (characters) => ({
    type: GET_CHARACTERS,
    characters,
})

const grabSingleCharacter = (character) => ({
    type: GRAB_CHARACTER,
    character,
})

// Thunks

export const grabCharacters = () => async (dispatch) => {
    const res = await fetch('/api/characters/');
    if (res.ok) {
        const characters = await res.json();
        dispatch(getCharacters(characters));
        return characters;
    }
}

export const getSingleCharacter = (id) => async (dispatch) => {
    const res = await fetch(`/api/characters/${id}/`);
    if (res.ok) {
        const character = await res.json();
        return dispatch(grabSingleCharacter(id));
    }
}


// initial state
const initialState = {}

// Reducer

const charactersReducer = (state=initialState, action) => {
    // let newState;
    switch (action.type) {
        // case ADD_CAMPAIGN:
        //     return {
        //         ...state,
        //         [action.campaign.id]: action.campaign,
        //     }
        case GRAB_CHARACTER:
        return {
            ...state,
            [action.character.id]: action.character,
        };
        // case EDIT_CAMPAIGN:
        //     return {
        //         ...state,
        //         [action.campaign.id]: action.campaign,
        //     }
        // case DESTROY_CAMPAIGN:
        //         newState = {...state};
        //         delete newState[action.campaign];
        //         return newState;
        case GET_CHARACTERS:
            const allCharacters = {};
            action.characters.characters.forEach((character) => {
                allCharacters[character.id] = character;
            });
            return {
                ...state,
                ...allCharacters,
            };
            default:
                return state;
            }
        }

// export campaigns reducer
export default charactersReducer
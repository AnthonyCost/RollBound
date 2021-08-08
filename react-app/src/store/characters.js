// Action Creators

const GET_CHARACTERS = 'campaigns/GET_CHARACTERS';
const GRAB_CHARACTER = 'campaigns/GRAB_CHARACTER';
const ADD_CHARACTER = 'campaigns/ADD_CHARACTER';
const GET_METADATA = 'campaigns/GET_METADATA';
const EDIT_CHARACTER = 'campaigns/EDIT_CHARACTER';
const DESTROY_CHARACTER = 'campaigns/DESTROY_CHARACTER';

const getCharacters = (characters) => ({
    type: GET_CHARACTERS,
    characters,
})

const grabSingleCharacter = (character) => ({
    type: GRAB_CHARACTER,
    character,
})

const addCharacter = (character) => ({
    type: ADD_CHARACTER,
    character,
})

const getMetadata = (payload) => ({
    type: GET_METADATA,
    payload
})

const editCharacter = (character) => ({
    type: EDIT_CHARACTER,
    character,
})

const destroyCharacter = (character) => ({
    type: DESTROY_CHARACTER,
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
        return dispatch(grabSingleCharacter(character));
    }
}

export const grabMetaData = () => async (dispatch) => {
    const res = await fetch(`/api/characters/createCharacter/`);
    if (res.ok) {
        const data = await res.json();
        return dispatch(getMetadata(data));
    }
}

export const createCharacter = (payload) => async (dispatch) => {
    

    const res = await fetch('/api/characters/createCharacter/', {
        method: 'POST',
        body: payload,
    });

    const data = await res.json();

    if (data.errors) {
        return data
    }

    dispatch(addCharacter(data));

    return data;

}

export const updateCharacter = (id, formData) => async (dispatch) => {
    const res = await fetch(`/api/characters/${id}/updateCharacter/`, {
        method: 'PUT',
        body: formData,
    });
    if (res.ok) {
        const character = await res.json();
        dispatch(editCharacter(character));
        return character
    }
    else if(res.status < 500) {
        const data = await res.json();
        if (data.errors) {
            return data.errors
        }
    }
}

export const deleteCharacter = (characterId) => async (dispatch) => {
    const res = await fetch(`/api/characters/${characterId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        dispatch(destroyCharacter(characterId));
    }
}

// initial state
const initialState = {}

// Reducer

const charactersReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                [action.character.id]: action.character,
            }
        case GRAB_CHARACTER:
        return {
            ...state,
            [action.character.id]: action.character,
        };
        case EDIT_CHARACTER:
            return {
                ...state,
                [action.character.id]: action.character,
            }
        case DESTROY_CHARACTER:
                newState = {...state};
                delete newState[action.character];
                return newState;
        case GET_CHARACTERS:
            const allCharacters = {};
            action.characters.characters.forEach((character) => {
                allCharacters[character.id] = character;
            });
            return {
                ...state,
                ...allCharacters,
            };
        case GET_METADATA:
            return {
                ...state,
                "metaData" : action.payload,
            };
            default:
                return state;
            }
        }

// export campaigns reducer
export default charactersReducer
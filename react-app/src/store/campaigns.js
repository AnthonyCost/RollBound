// Action Creators

const GET_CAMPAIGNS = 'campaigns/GET_CAMPAIGNS';
const GRAB_CAMPAIGN = 'campaigns/GRAB_CAMPAIGN';
const ADD_CAMPAIGN = 'campaigns/ADD_CAMPAIGN';
const EDIT_CAMPAIGN = 'campaigns/EDIT_CAMPAIGN';
const DESTROY_CAMPAIGN = 'campaigns/DESTROY_CAMPAIGN';

const getCampaigns = (campaigns) => ({
    type: GET_CAMPAIGNS,
    campaigns,
})

const grabSingleCampaign = (campaign) => ({
    type: GRAB_CAMPAIGN,
    campaign,
})

const addCampaign = (campaign) => ({
    type: ADD_CAMPAIGN,
    campaign,
})

const editCampaign = (campaign) => ({
    type: EDIT_CAMPAIGN,
    campaign,
})

const destroyCampaign = (campaign) => ({
    type: DESTROY_CAMPAIGN,
    campaign,
})

// Thunks

export const grabCampaigns = () => async (dispatch) => {
    const res = await fetch('/api/campaigns');
    if (res.ok) {
        const campaigns = await res.json();
        dispatch(getCampaigns(campaigns));
        return campaigns;
    }
}

export const getSingleCampaign = (campaignId) => async (dispatch) => {
    const res = await fetch(`/api/campaigns/${campaignId}`);
    if (res.ok) {
        const campaign = await res.json();
        dispatch(grabSingleCampaign(campaign));
        return campaign;
    }
}

export const createCampaign = (payload) => async (dispatch) => {
    
    // const formData = new FormData();
    // formData.append('hostId', hostId);
    // formData.append('title', title);
    // formData.append('story', story);
    // if (coverImage) {
    //     formData.append('coverImage', coverImage);
    // }

    const res = await fetch('/api/campaigns/createCampaign/', {
        method: 'POST',
        // headers: {
        //     'enctype': 'multipart/form-data',
        // },
        body: payload,
    });

    const data = await res.json();

    if (data.errors) {
        return data
    }

    dispatch(addCampaign(data));

    return data;

    
    
    // const res = await fetch('/api/createCampaign', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(campaign),
    // });
    // if (res.ok) {
    //     const campaign = await res.json();
    //     dispatch(addCampaign(campaign));
    //     return campaign;
    // }
}

export const updateCampaign = (campaignId, campaign) => async (dispatch) => {
    const res = await fetch(`/api/campaigns/${campaignId}/updateCampaign/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaign),
    });
    if (res.ok) {
        const campaign = await res.json();
        dispatch(editCampaign(campaign));
        return campaign;
    }
}

export const deleteCampaign = (campaignId) => async (dispatch) => {
    console.log("we are hitting this store");
    const res = await fetch(`/api/campaigns/${campaignId}/`, {
        method: 'DELETE'
    });
    console.log("res here: ", res);
    if (res.ok) {
        dispatch(destroyCampaign(campaignId));
    }
}

// initial state
const initialState = {}

// Reducer

const campaignsReducer = (state=initialState, action) => {
    let newState;
    switch (action.type) {
        case ADD_CAMPAIGN:
            return {
                ...state,
                [action.campaign.id]: action.campaign,
            }
        case EDIT_CAMPAIGN:
            return {
                ...state,
                [action.campaign.id]: action.campaign,
            }
        case DESTROY_CAMPAIGN:
                newState = {...state};
                delete newState[action.campaign];
                return newState;
        case GET_CAMPAIGNS:
            const allCampaigns = {};
            action.campaigns.campaigns.forEach((campaign) => {
                allCampaigns[campaign.id] = campaign;
            });
            return {
                ...state,
                ...allCampaigns,
            };
            case GRAB_CAMPAIGN:
            return {
                ...state,
                [action.campaign.id]: action.campaign,
            };
            default:
                return state;
            }
        }

// export campaigns reducer
export default campaignsReducer
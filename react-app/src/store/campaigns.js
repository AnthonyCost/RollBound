// Action Creators

const GET_CAMPAIGNS = 'campaigns/GET_CAMPAIGNS';
const GRAB_CAMPAIGN = 'campaigns/GRAB_CAMPAIGN';

const getCampaigns = (campaigns) => ({
    type: GET_CAMPAIGNS,
    campaigns,
})

const grabSingleCampaign = (campaign) => ({
    type: GRAB_CAMPAIGN,
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

// initial state
const initialState = {}

// Reducer

const campaignsReducer = (state=initialState, action) => {
    switch (action.type) {
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
export default campaignsReducer;
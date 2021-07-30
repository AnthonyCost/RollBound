// Action Creators

const GET_CAMPAIGNS = 'campaigns/GET_CAMPAIGNS';

const getCampaigns = (campaigns) => ({
    type: GET_CAMPAIGNS,
    campaigns,
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
            default:
                return state;
            }
        }

// export campaigns reducer
export default campaignsReducer;
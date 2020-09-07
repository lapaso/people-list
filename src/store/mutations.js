import { SELECTED_PEOPLE_IDS_STORAGE_KEY } from "./../config"
export default {
    setForbes400: (state, data) => { state.peopleList = data; },

    setSelectedPeolpelIds: (state, data) => { state.selectedPeopleIds = data },

    toggleSelectPeopleById: (state, peopleId) => {
        let index = state.selectedPeopleIds.indexOf(peopleId);
        if (index !== -1) {
            state.selectedPeopleIds.splice(index, 1);
        } else {
            state.selectedPeopleIds.push(peopleId)
        }

        localStorage.setItem(SELECTED_PEOPLE_IDS_STORAGE_KEY, JSON.stringify(state.selectedPeopleIds));
    },

    setEmailMessage: (state, newMessage) => { state.emailMessage = newMessage },
    
}
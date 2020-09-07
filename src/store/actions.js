import { getForbes400 } from './../api/people'
import { SELECTED_PEOPLE_IDS_STORAGE_KEY } from './../config'

export default {
    loadForbes400: async function ({ commit }) {
        var data = await getForbes400();
        commit("setForbes400", data);
        return data;
    },

    loadSelectedPeopleIds: function ({ commit }) {
        var storagedData = localStorage.getItem(SELECTED_PEOPLE_IDS_STORAGE_KEY);
        if (storagedData) { commit("setSelectedPeolpelIds", JSON.parse(storagedData)) }
    },

    sendMessage: async function ({ commit, state }) {
        let dataForRequest = {
            peopleIds: state.selectedPeopleIds,
            message: state.emailMessage
        };


        let promise = new Promise((resolve) => {
            setTimeout(() => {
                commit("setEmailMessage", "");
                commit("setSelectedPeolpelIds", []);
                resolve(dataForRequest);
            }, 200)
        });

        return promise;
    },
}
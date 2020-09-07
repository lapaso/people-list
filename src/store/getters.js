
export default {
    peopleList: (state) => state.peopleList,

    selectedPeopleIds: (state) => state.selectedPeopleIds,

    personById: (state) => (peopleId) => { return state.peopleList.find((i) => i.uri === peopleId) },

    emailMessage: (state) => state.emailMessage,

    getSelectedPeople: (state) => {
        return state.peopleList.filter((i) => { return state.selectedPeopleIds.indexOf(i.uri) !== -1; });
    }
}
export default function(state, action) {
	if (state === undefined) {
		return null;
	}

	if (action.type === 'ACTIVE_CITY') {
		return action.payload;
	} else {
		return state
	}
}
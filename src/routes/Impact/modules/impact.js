// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_VALUE = 'LOAD_VALUE'

// ------------------------------------
// Actions
// ------------------------------------

export const loadValue = () => {
  return (dispatch) => {
    return dispatch({
      type    : LOAD_VALUE,
      payload: impactData,
    })
  }
}

export const actions = {
  loadValue
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const impactData = {
  v3baseScore : 7.8,
  v3vector : 'CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H (legend)',
  v3impactScore : 5.9,
  v3exploitabilityScore : 1.8,
  av : 'Local',
  ac : 'Low',
  pr : 'Low',
  ui : 'None',
  s : 'Unchanged',
  c : 'High',
  i : 'High',
  a : 'High',
  v2baseScore : 7.2,
  v2vector : '(AV:L/AC:L/Au:N/C:C/I:C/A:C) (legend)',
  v2impactScore : 10.0,
  v2exploitabilityScore : 3.9,
  accessVecotr : 'Locally exploitable',
  accessCompexity : 'Low',
  authentication : 'Not required to exploit',
  impactType : 'Allows unauthorized disclosure of information; Allows unauthorized modification; Allows disruption of service'
}

const ACTION_HANDLERS = {
  [LOAD_VALUE] : (state, action) => Object.assign({}, state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------

// export default function impactReducer (state = initialState, action) {
//   const handler = ACTION_HANDLERS[action.type]
//
//   return handler ? handler(state, action) : state
// }
export default function impactReducer (state = {}, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

const initialState = {
  pln: 4.25,
  transactions: [
    {
      id: 's1',
      title: 'Pierwsza wpłata',
      euro: 23,
    },
    {
      id: 's2',
      title: 'Zagraniczny przelew',
      euro: 63,
    },
    {
      id: 's3',
      title: 'Zwrot podatku',
      euro: 14,
    },
    {
      id: 's4',
      title: 'Przelew od siostry',
      euro: 88,
    },
    {
      id: 's5',
      title: 'Przelew od brata',
      euro: 88,
    },
    {
      id: 's6',
      title: 'Koszty paliwa',
      euro: 88,
    },
  ],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        transactions: [...state.transactions, action.payload.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        transactions: [...state.transactions.filter(oneItem => oneItem.id !== action.payload.id)],
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        pln: action.payload.value.pln,
      };
    default:
      return state;
  }
};

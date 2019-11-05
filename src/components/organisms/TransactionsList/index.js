import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transaction from 'components/molecules/Transaction';
// import { connect } from 'react-redux';
// import { getItems as getItemsAction } from 'src/actions';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledList = styled.ul`
  max-width: 1100px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const dummyData = [
  {
    id: 1,
    title: 'First pay',
    euro: 23,
  },
  {
    id: 2,
    title: 'Value change',
    euro: 63,
  },
  {
    id: 3,
    title: 'Second',
    euro: 14,
  },
  {
    id: 4,
    title: 'No money',
    euro: 88,
  },
];

class TransactionsList extends Component {
  state = {
    example: '',
  };
  //   componentDidMount() {
  //     this.props.getItems();
  //   }

  render() {
    //  const { data } = this.props;

    return (
      <StyledWrapper>
        <h2>Historia transakcji</h2>
        <StyledList>
          {dummyData.map(transaction => (
            <Transaction
              id={transaction.id}
              title={transaction.title}
              euro={transaction.euro}
              pln={transaction.euro * 4.25}
              key={transaction.id}
            />
          ))}
        </StyledList>
      </StyledWrapper>
    );
  }
}

// const mapStateToProps = state => {
//   const { data } = state;
//   return { data };
// };

// const mapDispatchToProps = dispatch => ({
//   getItems: () => dispatch(getItemsAction()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(EstatesList);

export default TransactionsList;

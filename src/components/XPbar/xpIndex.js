import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import XPbar from './xpPresenter';

// xp bars should have access to all of the users xp data types

function mapStateToProps(state) {
  const totalXp = state.user.totalXp;
  const level = state.user.level;
  const abXp = state.user.abXp;
  const legXp = state.user.legXp;
  const armXp = state.user.armXp;
  const distXp = state.user.distXp;

  return {
    totalXp,
    level,
    abXp,
    legXp,
    armXp,
    distXp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClickPlus: (data) => {
      dispatch(actions.userAddXP(data));
    },
    onClickMinus: (data) => {
      dispatch(actions.userSubtractXP(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(XPbar);
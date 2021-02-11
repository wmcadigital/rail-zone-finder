import React from 'react';
import Icon from 'components/shared/Icon/Icon';
import PropTypes from 'prop-types';

import s from './CloseButton.module.scss';

const CloseButton = ({ onClick }) => {
  return (
    <button type="button" className={s.closeButton} onClick={onClick}>
      <Icon iconName="general-cross" className={`general-cross ${s.closeIcon}`} />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isFloated: PropTypes.bool,
};

CloseButton.defaultProps = {
  isFloated: false,
};

export default CloseButton;

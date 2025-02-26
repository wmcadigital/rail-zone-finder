import React from 'react';
import { Icon } from 'components/shared/Icon/Icon';
import PropTypes from 'prop-types';

import s from './CloseButton.module.scss';

export function CloseButton({ onClick }) {
  return (
    <button type="button" className={s.closeButton} onClick={onClick}>
      <Icon iconName="general-cross" className={`general-cross ${s.closeIcon}`} title="Close" />
    </button>
  );
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;

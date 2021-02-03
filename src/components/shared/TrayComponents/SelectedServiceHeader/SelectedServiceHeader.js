import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// Imported components
import CloseButton from './CloseButton/CloseButton';
import s from './SelectedServiceHeader.module.scss';

const SelectedServiceHeader = ({ autoCompleteState, autoCompleteDispatch, queryId }) => {
  const selectedServiceRef = useRef(null);

  const selectedService = autoCompleteState.selectedStations[queryId];

  return (
    <>
      {/* Close disruption box */}
      <div
        className={`wmnds-grid wmnds-grid--align-center wmnds-m-t-xs wmnds-m-b-md ${s.selectedStationBox}`}
        ref={selectedServiceRef}
      >
        <strong className={`wmnds-col-auto ${s.selectedSummary}`}>
          {selectedService.routeName || selectedService.stopName}
        </strong>

        <CloseButton onClick={autoCompleteDispatch} />
      </div>
    </>
  );
};

// PropTypes
SelectedServiceHeader.propTypes = {
  autoCompleteState: PropTypes.objectOf(PropTypes.any).isRequired,
  autoCompleteDispatch: PropTypes.func.isRequired,
  to: PropTypes.bool,
};

SelectedServiceHeader.defaultProps = {
  to: false,
};

export default SelectedServiceHeader;

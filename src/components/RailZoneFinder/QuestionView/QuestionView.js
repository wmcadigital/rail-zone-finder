import React, { useState } from 'react';
// Rail zone svg component
import Button from '../../shared/Button/Button';
import Radio from '../../shared/Radios/Radio/Radio';
import SearchComponents from '../../shared/SearchComponents/SearchComponents';
import s from './QuestionView.module.scss';

const QuestionView = () => {
  const [radioValue, setRadioValue] = useState(null);
  const [error, setError] = useState(false);
  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
    setError(false);
  };
  const handleContinue = () => {
    if (!radioValue) {
      setError(true);
    } else {
      window.location.href = `https://find-a-ticket.wmnetwork.co.uk/?railZones=${radioValue}`;
    }
  };
  return (
    <div className="wmnds-grid wmnds-grid--justify-between">
      <div className="wmnds-col-md-2-3">
        <div className="bg-white wmnds-p-lg wmnds-m-b-lg">
          <h2 className="wmnds-fe-question">Which train stations will you use?</h2>
          <p>Train stations in the West Midlands are in zones.</p>
          <p>You can choose which zones your train ticket will cover.</p>
          <SearchComponents showHeader={false} />
          <div className="wmnds-grid wmnds-grid--spacing-md-2-md wmnds-m-b-lg">
            <div className="wmnds-col-1 wmnds-col-md-1-2">
              <Button
                btnClass={`wmnds-btn--link ${s.btnLinkIconLeft}`}
                text="View rail zones on a map"
                iconLeft="general-location-pin"
              />
            </div>
            <div className="wmnds-col-1 wmnds-col-md-1-2">
              <Button
                btnClass={`wmnds-btn--link ${s.btnLinkIconLeft}`}
                text="View rail zones in a list"
                iconLeft="general-list"
              />
            </div>
          </div>
          <div className="wmnds-fe-group wmnds-m-b-md">
            <fieldset className="wmnds-fe-fieldset">
              <legend className="wmnds-fe-fieldset__legend">
                <h2 className="wmnds-fe-question wmnds-m-b-md">Select your rail zones</h2>
                <p>Based on the stations you&rsquo;ve told us about</p>
              </legend>
              <div
                className={`wmnds-fe-radios wmnds-fe-radios--inline${
                  error ? ' wmnds-fe-group--error' : ''
                }`}
              >
                {/* If there is an error, show here */}
                {error && <span className="wmnds-fe-error-message">Please select an option</span>}
                {/* Loop through radios and display each radio button */}
                <Radio
                  key="railZones1_4"
                  name="railZones"
                  text="<strong>Zone 1 to 4</strong> From £68.50*"
                  value="1+4"
                  onChange={handleRadioChange}
                />
                <Radio
                  key="railZones2_5"
                  name="railZones"
                  text="<strong>Zone 2 to 5</strong> From £60.00*"
                  value="2+5"
                  onChange={handleRadioChange}
                />
                <details className="wmnds-details wmnds-m-b-md">
                  <summary className="wmnds-link">I need to travel in more zones</summary>
                  <div className="wmnds-details__content">
                    <p>Select a different zone</p>
                    <Radio
                      key="railZones1_5"
                      name="railZones"
                      text="<strong>Zone 1 to 5</strong> From £74.60*"
                      value="1+5"
                      onChange={handleRadioChange}
                    />
                  </div>
                </details>
              </div>
            </fieldset>
          </div>
          <p>
            * Estimate based on ticket duration, travel time and seat type. <br />
            Price shown is for a Monthly Direct Debit Peak Standard class ticket.
          </p>
          <Button onClick={handleContinue} className="wmnds-btn" text="Continue" />
        </div>
      </div>
    </div>
  );
};

export default QuestionView;


import React from 'react';

import Navbar from '../../../../content/components/Navbar';

export default () => (
  <div>
    <Navbar />
    <div style={{ marginTop: '100px' }} />
    <div className="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/patrick147?embed=true" />
  </div>
);

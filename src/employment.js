import React from 'react';

function Employment() {
  return ( <ul className='employment'>
    <li><ul className='job'>
      <li className='employer'>Cisco</li>
      <li className='jobTitle'>Network Sys Admin</li>
      <li className='datesOfEmployment'>2010-2014</li>
      <li className='jobDesc'>Sort Cables. Make internet work.</li>
    </ul></li>

    <li><ul className='job'>
      <li className='employer'>PWC</li>
      <li className='jobTitle'>Auditor</li>
      <li className='datesOfEmployment'>2018-present</li>
      <li className='jobDesc'>Auditing financial statements for acceptable losses</li>
    </ul></li>

  </ul>

  );

}
export default Employment;
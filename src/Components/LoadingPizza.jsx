import React from 'react';
import ContentLoader from 'react-content-loader';

function loadingPizza() {
   return (
      <ContentLoader
         speed={0.4}
         width={280}
         height={460}
         viewBox="0 0 280 460"
         backgroundColor="#e7e2e2"
         foregroundColor="#ecebeb">
         <circle cx="133" cy="107" r="107" />
         <rect x="0" y="252" rx="2" ry="2" width="280" height="26" />
         <rect x="0" y="295" rx="6" ry="6" width="280" height="84" />
         <rect x="48" y="433" rx="0" ry="0" width="1" height="10" />
         <rect x="124" y="415" rx="16" ry="16" width="145" height="32" />
         <rect x="9" y="415" rx="8" ry="8" width="80" height="32" />
      </ContentLoader>
   );
}

export default loadingPizza;

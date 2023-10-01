import { useEffect } from 'react';

function getSubjectFromPath() {
    const path = window.location.pathname;

    switch (path) {
        case '/pib24x7':
            return 'PIB24X7';
            break;
        case '/rbi24x7':
            return 'RBI24X7';
            break;
        case '/spotlight_ga':
            return 'SPOTLIGHT';
            break;
        case '/finance':
            return 'FINANCE';
            break;
        case '/management':
            return 'MANAGEMENT';
            break;
        case '/esi':
            return 'ESI';
            break;
        case '/cloudaffairs_ga':
            return 'CA';
            break;
        default:
            return 'PIB24X7';
    }
}

export default getSubjectFromPath;

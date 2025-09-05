// 'use client';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// export default function BootstrapClient() {
//   return null;
// }

'use client';
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // This runs only in the browser, not during SSR
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}

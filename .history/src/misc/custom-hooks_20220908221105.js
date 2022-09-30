import { useState } from 'react';

function useModalState(defaultValue = false) {
  const [state, setState] = useState(defaultValue);
}

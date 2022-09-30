import { useCallback, useState } from 'react';

function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);

  return {};
}

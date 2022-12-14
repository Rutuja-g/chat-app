/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCallback, useState } from 'react';

export function useModalState(defaultValue = false) {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);

  return { isOpen, open, close };
}

import { useState } from 'react';
import { ToastProps, ToastOptions, ToastProviderProps } from './interfaces';
import { ToastType } from './types';
import ToastContext from './ToastContext';
import { getByQueryId } from '../../utils';

import ToastContainer from './ToastContainer';

export const ToastProvider = ({
  children,
  autoClose,
  duration,
}: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (
    type: ToastType,
    message: string,
    options?: ToastOptions,
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    if (autoClose) {
      options = { ...options, autoClose: autoClose, duration: duration };
    }

    setToasts((prev) => {
      return [...prev, { id, type, message, options }];
    });

    if (autoClose) {
      setTimeout(() => {
        removeToast(id);
      }, duration || 5000);
    }
    if (options?.autoClose) {
      setTimeout(() => {
        removeToast(id);
      }, options.duration || 5000);
    }
  };

  const removeToast = (id: string) => {
    const div = getByQueryId(id);
    if (div) {
      div.classList.remove('animate-slideInFromRight');
      div.classList.add('animate-slideOutToRight');
    }
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 505);
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

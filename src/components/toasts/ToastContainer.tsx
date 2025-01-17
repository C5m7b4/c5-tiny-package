import { ToastContainerProps } from './interfaces';
import Toast from './Toast';

const ToastContainer = ({ toasts, removeToast }: ToastContainerProps) => {
  return (
    <div query-id="toast-container" className="fixed top-0 right-0 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClick={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;

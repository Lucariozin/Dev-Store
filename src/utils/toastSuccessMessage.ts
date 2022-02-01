import { toast } from "react-toastify";

export function toastSuccessMessage(message: string) {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    style: {
      textAlign: 'center',
      fontSize: '1.6rem',
      fontWeight: 600,
      color: '#2e2e2e',
      backgroundColor: '#F7FAFC',
    },
  });
}

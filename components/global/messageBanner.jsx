import { toast } from 'react-toastify';

export default ({ status, message }) =>
  toast(message, {
    type: status || 'success',
    autoClose: 5000,
    closeOnClick: true,
    theme: 'dark',
  });

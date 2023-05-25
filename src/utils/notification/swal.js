import swal from 'sweetalert';

export const successSwal = (title = 'Success', text) =>
  swal({
    title,
    text,
    icon: 'success',
    button: 'Ok',
  });

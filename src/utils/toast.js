import Swal from "sweetalert2";

export const Toast = async (text, icon) => {
    Swal.fire({
        toast: true,
        icon: icon,
        title: text,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });
}
import Swal from 'sweetalert2/dist/sweetalert2.js'
const useAlerts = () =>{

    const ToastInformacion = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ToastConfirmacion= Swal.mixin({
        toast: true,
        title: '¿Estas segúro?',
        icon: 'warning',
        position: 'top-end',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#303840',
        confirmButtonText: 'Confirmar!'            
    })  

    return{
        ToastInformacion,
        ToastConfirmacion

    }
}

export default useAlerts
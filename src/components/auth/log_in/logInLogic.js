import Swal from 'sweetalert2'

export function validation(user){
    if(!!user){
        window.localStorage.setItem('currUser', JSON.stringify(user))
        Swal.fire({
            title: 'Success',
            text: 'You are logged in!',
            icon: 'success',
            background: '#000',
            color: '#fff',
            confirmButtonText: 'ok',
            confirmButtonColor: 'rgb(249 183 0)'
            })
        return true;
    }
    Swal.fire({
    title: 'Error!',
    text: 'Username or password are incorect !',
    icon: 'error',
    iconColor: '#ff0000',
    background: '#000',
    color: '#fff',
    confirmButtonText: 'try again',
    confirmButtonColor: 'rgb(249 183 0)'
    })
    return false;
}

import axios from 'axios'
import qs from 'qs'

// export const IP ='http://127.0.0.1:80'
export const IP ='http://192.168.1.2:80'


export function login(acc,pwd){
    return axios.post(IP+'/login.php',qs.stringify({acc,pwd})).then(({data})=>data)
}


export function reg(acc,pwd){
    return axios.post(IP+'/reg.php',qs.stringify({acc,pwd})).then(({data})=>data)
}

export function valitecode(){
    return axios.get(IP+'/valitecode.php').then(({data})=>data)
}

export function gethouselist(){
    return axios.get(IP+'/gethouselist.php').then(({data})=>data)
}
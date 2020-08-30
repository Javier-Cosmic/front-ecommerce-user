import AxiosUrl from './AxiosUrl';

const tokenAuth = (token) => {
    if (token) {
        AxiosUrl.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete AxiosUrl.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;
import api from "./api";

export default {
    getLocais() {
        return api.get('/location').then(res => {
            return res

        }).catch(error => {
            return error

        })

    }

}

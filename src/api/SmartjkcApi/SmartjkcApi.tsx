import axios from 'axios';

interface Props {
    url: string,
    token: string,
    body?: {}
}

const patchData = async ({ url, body, token }: Props) => {
    const myheader = {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    }
    try {
        const { data } = await axios.patch(
            url,
            body,
            { ...myheader },
        )
        return {
            data: data.data,
            status: 'success',
            error: data.error,
            message: data.info,
        }
    } catch (error: any) {
        return {
            data: null,
            status: 'error',
            message: `Error saving`,
            error: error.response,
        }
    }
}

const postData = async ({ url, body, token }: Props) => {
    const myheader = {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    }
    try {
        const { data } = await axios.post(
            url,
            body,
            { ...myheader },
        )
        return {
            data: data.data,
            status: 'success',
            error: data.error,
            message: data.info,
        }
    } catch (error: any) {
        return {
            data: null,
            status: 'error',
            message: `Error saving`,
            error: error.response,
        }
    }
}

const getData = async ({ url, token }: Props) => {
    const myheader = {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    }
    try {
        const { data } = await axios.get(
            url,
            { ...myheader },
        )
        return {
            data: data.data,
            status: 'success',
            error: data.error,
            message: data.info,
        }
    } catch (error: any) {
        return {
            data: null,
            status: 'error',
            message: `Error saving`,
            error: error.response,
        }
    }
}

const deleteData = async ({ url, body, token }: Props) => {
    const myheader = {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    }
    try {
        const reqData = {
            headers: myheader.headers,
            data: body
        }
        const { data } = await axios.delete(
            url,
            reqData
        )
        return {
            data: data.data,
            status: 'success',
            error: data.error,
            message: data.info,
        }
    } catch (error: any) {
        return {
            data: null,
            status: 'error',
            message: `Error saving`,
            error: error.response,
        }
    }
}

export default {patchData, postData, getData, deleteData};
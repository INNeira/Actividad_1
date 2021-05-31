import axios from  'axios'

export const getDataCountries = async (callback) => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/countries/')
        callback(res.data)
    }catch(err){
        console.error(err)
    }
};

export const postDataCountries = async (name) => {
    try{
        const res = await axios.post(
            'https://api-fake-pilar-tecno.herokuapp.com/countries',
            {
                name: name
            },
            {headers: {
                'Content-Type': 'application/json'
            }}
            )
        return res.data
    }catch(err){
        console.error(err)
    }
}

export const deleteDataCountries = async (id) => {
    try{
        const res = await axios.delete(
            `https://api-fake-pilar-tecno.herokuapp.com/countries/${id}`
        )
        return res.data

    }catch(err){
        console.error(err)
    }
}

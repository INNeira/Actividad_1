import axios from  'axios'

export const getDataCities = async (callback) => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/places?_expand=countrie')
        callback(res.data)
    }catch(err){
        console.error(err)
    }
};

export const postDataCities = async (name, countrieId) => {
    try{
        const res = await axios.post(
            'https://api-fake-pilar-tecno.herokuapp.com/places',
            {
                name: name,
                countrieId: countrieId,
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

export const deleteDataCities = async (id) => {
    try{
        const res = await axios.delete(
            `https://api-fake-pilar-tecno.herokuapp.com/places/${id}`
        )
        return res.data

    }catch(err){
        console.error(err)
    }
}

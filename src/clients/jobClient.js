import axios from  'axios'

export const getData = async (callback) => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/jobs?_expand=organization')
        callback(res.data)
    }catch(err){
        console.error(err)
    }
};

export const postData = async (position, desc, orgId) => {
    try{
        const res = await axios.post(
            'https://api-fake-pilar-tecno.herokuapp.com/jobs',
            {
                position: position,
                description: desc,
                organizationId: orgId
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

export const deleteDataJobs = async (id) => {
    try{
        const res = await axios.delete(
            `https://api-fake-pilar-tecno.herokuapp.com/jobs/${id}`
        )
        return res.data

    }catch(err){
        console.error(err)
    }
}
import axios from "axios";
import { useEffect, useState } from "react";


const useLoginUser = () => {

    const [token, setToken] = useState('')

    // const data={user: user , password : password}
    /* useEffect(() => {
         
         axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data )
             .then(res => console.log(res.data))
 
     }, []) */
    const getToken = (data) => {
        setToken(data.email + "'-s--'" + data.password)
        useEffect(() => {

            axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/users/login', data)
                .then(res => console.log(res.data))

        }, [])

        return data.email + "'-s--'" + data.password
    }


    return { token, getToken }
};

export default useLoginUser;

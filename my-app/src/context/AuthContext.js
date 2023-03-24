import {createContext , useReducer} from 'react';


const init = {

    user: JSON.parse(localStorage.getItem('user'))  || null, loading:false ,error: null
    
}


export const AuthContext = createContext(init);



const authReducer = (state , action) => {

    switch (action.type) {
        case 'LOGIN-START':
            
            return{
                user:null ,
                loading:true ,
                error:null
            } ;
        case 'LOGIN-SUCCESS':
            
            return{
                user:action.payload ,
                loading:false ,
                error:null
            } ;
        case 'LOGIN-FAILURE':
            
            return{
                user:null ,
                loading:false ,
                error:action.payload
            } ;
        case 'LOGINOUT':
            
            return{
                user:null ,
                loading:false ,
                error:action.payload
            } ;
    
        default:
            return state ;
    }

};


export const AuthContextProvider = ({children}) => {

    const [state , dispatch] = useReducer(authReducer , init);

    return(
        <AuthContext.Provider value={{user:state.user , loading:state.loading ,error:state.error , dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}
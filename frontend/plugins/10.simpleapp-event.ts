/**
 * This file was automatically generated by simpleapp generator. Every
 * MODIFICATION OVERRIDE BY GENERATEOR
 * last change 2024-02-23
 * Author: Ks Tan
 */
import DialogService from 'primevue/dialogservice';
import { defineNuxtPlugin } from "#app";
import axios, { Axios, AxiosResponse } from 'axios'
import {Notification,EventType} from '~/types'
// import PrimeVue from "primevue/config";
import mitt from 'mitt'

// import ToastService from 'primevue/toastservice';
// import ConfirmationService from 'primevue/confirmationservice';
// import Tooltip from 'primevue/tooltip';
const emitter = mitt<EventType>()
export default defineNuxtPlugin( async(nuxtApp) => {
    //hide __NUXT__ at client side.
    onNuxtReady(()=>{
      window.__NUXT__ = undefined;
    })
    // useNuxtApp().vueApp.use(DialogService)
    //const { csrf } = useCsrf()    
    //axios.defaults.headers.common = {"CSRF-TOKEN": csrf};
    const myaxios = axios.create({timeout:5000})
    myaxios.interceptors.response.use(
      (response) => {        
        return  response
      }, 
      (error) => {
        // console.log("error catch",error)

        if(error?.code && error.code == 'ERR_BAD_REQUEST'){
          // console.log("error.code",error.response.status, error)
          if(error.response && error.response.status==403){
            console.warn("error status 403, redirect to external link /" )
            navigateTo('/',{external:true})
          }else{
            console.error("axios ERR_BAD_REQUEST",error)
          }          
        }        
        else if(error.code){        
          throw createError({
            statusCode:error.code,
            statusMessage:error.message,
            fatal:true
          })           
        }
        else if(error.response && error.response.status==302){        
          console.error("axios 302 session expired, start login flow")
        }else if(error.response && error.response.status){
          let errmsg = error.response.message
          let errorcode =error.response.status
          if(error.response?.data && error.response?.data?.message){
            errmsg = error.response.data.message
            errorcode = error.response.data.statusCode
          }
          
          throw createError({
            statusCode:errorcode,
            statusMessage:errmsg,
            fatal:true
          })  
            // return Promise.reject(error)
        }else{
          console.error("unknown error")
          throw createError({statusCode:500,statusMessage:"Internal server error"}) 
        }
      });      
    return {
        provide: {
          event: emitter.emit, // Will emit an event
          listen: emitter.on, // Will register a listener for an event
          axios: myaxios,
        } 
    }
    //other components that you need
});

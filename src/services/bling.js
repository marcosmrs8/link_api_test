import axios from 'axios';
import { convertToXml } from '../utils/convertToXml.js';

export async function formatAndSendOrderToBling(order){
    try {
        const xml = await convertToXml(order)  
        await axios.post(`${process.env.BLING_BASE_URL_API}/pedido/json?apikey=${process.env.API_KEY_BLING}&xml=${encodeURIComponent(xml)}`)    
        return
    } catch (error) {
        console.error('Error to post on bling:', error.message)
    }

}
import axios from 'axios';
import { convertToXml } from '../utils/convertToXml.js';

export async function formatAndSendOrderToBling(order){
    const xml = await convertToXml(order)  
    await axios.post(`${process.env.BLING_BASE_URL_API}/pedido/json?apikey=${process.env.API_KEY_BLING}&xml=${encodeURIComponent(xml)}`)
}
import axios from 'axios';

export async function getPipedriveWonDeals(){
    try {
        const response = await axios.get(`${process.env.PIPEDRIVE_BASE_URL_API}/deals?status=won&api_token=${process.env.API_TOKEN_PIPEDRIVE}`)
        return response.data.data
    } catch (error) {
        console.error('Error to get data from piedrive:', error.message)
    }
  
}
import {getPipedriveWonDeals} from '../services/pipedriveWon.js';
import {formatAndSendOrderToBling} from '../services/bling.js'
import Order from '../schema/orders.schema.js'

export async function addNewOrder(req, res){
    const response = await getPipedriveWonDeals()
    for (const i of response){
        await formatAndSendOrderToBling(i)
    }
    for (const deal of response){
        try{        
            let date = deal.won_time
            date = date.split(' ')[0]
            const Deals = await Order.findOne({ date : date })
            if(!Deals){
                const order = await Order.create({
                    date: deal.won_time.split(' ')[0],
                    total_value: deal.value,
                    oportunity:[{      
                        id: deal.id,
                        value: deal.value,
                        name: deal.person_name,
                    }]        
                    
        
                })
                await order.save()
            }else{
                let Oportunities = {id : deal.id, value: deal.value, name: deal.person_name }
                let updated= {
                    total_value: Deals.total_value + deal.value,
                    oportunity:[Oportunities]
                }
                await Order.findOneAndUpdate({"_id":Deals.id}, { updated}, { upsert: true, new: true})  
                
            }
        }catch(e){
            console.log(e.message)
        }
   
    }
   
    res.send(response)
    
}
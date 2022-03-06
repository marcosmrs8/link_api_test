import {getPipedriveWonDeals} from '../services/pipedriveWon.js';
import {formatAndSendOrderToBling} from '../services/bling.js'
import Order from '../schema/orders.schema.js'

export async function addNewOrder(req, res){
    const response = await getPipedriveWonDeals()
    for (const orders of response){
        await formatAndSendOrderToBling(orders)
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
                let total = 0;         
                let Oportunities = {id : deal.id, value: deal.value, name: deal.person_name }     
                const updateDB = await Order.findOneAndUpdate({"_id": Deals.id}, { $addToSet:{oportunity: Oportunities}}, {upsert: true, new: true}) 
                updateDB.oportunity.map(oport=> {
                    total += oport.value
                })                
                await Order.findOneAndUpdate({"_id": Deals.id}, {total_value: total})
            }
        }catch(e){
            console.error(e)
            return res.status(500)
        }
   
    }   
    res.sendStatus(200)
}

export async function listAll(req, res){
    Order.find(function(err, order){
        if(err) return res.send(err.message)
        if(order.length >= 1){
            res.status(200).send(order)
        }else{
            res.status(404).send('nenhuma dado encontrado')
        }
    })
}

export async function listByDate(req, res){
    const date = req.params.date
    try {
        Order.find({date: date}, function(err, order){
            if(err) return res.send(err.message)   
            if(order.length >= 1){
                res.status(200).send(order)
            }else{
                res.status(404).send('Nenhum dado encontrado para esta data')
            }           
                
        })
    } catch (error) {
        return res.status(404)
    }

}
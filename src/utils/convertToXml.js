

export async function convertToXml(order){
const xml = 
    `<?xml version="1.0" encoding="UTF-8"?>
    <pedido>
    <cliente>
    <nome>${order.person_id.name}</nome>
    </cliente>       
    <itens>
    <item>
    <codigo>${order.id}</codigo>
    <descricao>${order.title} </descricao>
    <qtde>${order.products_count}</qtde>
    <vlr_unit>${order.value}</vlr_unit>
    </item>
    </itens>
    </pedido>
    `
    return xml
}

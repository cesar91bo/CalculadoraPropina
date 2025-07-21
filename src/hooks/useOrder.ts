import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItem) => {
        //Validar que exista el item en el pedido
        const existingItem = order.find(orderItem => orderItem.id === item.id)
        if(existingItem){
            //Si existe, incrementar la cantidad
            const updatedOrder = order.map(orderItem => 
                orderItem.id === item.id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
            )
            setOrder(updatedOrder)
        }
        else{
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem]) 
        }
    }

    return{
        addItem
    }
}
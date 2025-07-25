import { OrderItem } from "../types/";
type OrderContentsProps = {
    order: OrderItem[];
} 

export default function OrderContents ({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className='font-black text-4xl'>Consumo</h2>
        <div className="space-y-3 mt-5">
          {order.length === 0 ? 
          <p className="text-center">La orden esta vacío</p>
        : (order.map(item => (
            <div key={item.id} className="flex justify-between items-center">
              <p>{item.name}</p>
              <p>{item.quantity}</p>
            </div>
            ))    
          )}
        </div>
    </div>
  )
}

import { useMemo } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
}


export default function OrderTotals( { order, tip }: OrderTotalsProps) {
    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [order]);

    const tipAmount = useMemo(() => {
        return subtotalAmount * tip;
    }, [order, tip]);

  return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propinas:</h2>
            <p>Subtotal a Pagar:{' '}
               <span className="font-bold">{formatCurrency(subtotalAmount)}</span> 
            </p>

            <p>Propina:{' '}
               <span className="font-bold">{formatCurrency(tipAmount)}</span> 
            </p>

            <p>Total a Pagar:{' '}
               <span className="font-bold">$0.00</span> 
            </p>
        </div>
        <button></button>
    </>
  )
}


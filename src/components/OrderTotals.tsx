import { useMemo, useCallback } from "react";
import type { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}


export default function OrderTotals( { order, tip, placeOrder }: OrderTotalsProps) {
    const subtotalAmount = useCallback(() => {
        return order.reduce((total, item) => total + (item.price * item.quantity), 0);
    }, [order]);

    const tipAmount = useCallback(() => {
        return subtotalAmount() * tip;
    }, [order, tip]);

    // const totalAmount = useMemo(() => {
    //     return subtotalAmount + tipAmount;
    // }, [tip, order]);
    const totalAmount = useCallback(() =>  subtotalAmount() + tipAmount(), [tip,order]);

  return (
    <>
        <div className="space-y-3">
            <h2 className="text-2xl font-black">Totales y Propinas:</h2>
            <p>Subtotal a Pagar:{' '}
               <span className="font-bold">{formatCurrency(subtotalAmount())}</span> 
            </p>

            <p>Propina:{' '}
               <span className="font-bold">{formatCurrency(tipAmount())}</span> 
            </p>

            <p>Total a Pagar:{' '}
               <span className="font-bold">{formatCurrency(totalAmount())}</span> 
            </p>

        </div>
        <button 
          className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
          disabled={totalAmount() === 0}
          onClick={placeOrder}
        >
          Guardar Orden
        </button>
    </>
  )
}


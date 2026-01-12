import dayjs from "dayjs";
import { CartItemDetails } from "./CartItemDetails";
import { DeliveryOption } from "./DeliveryOptions";

export function OrderSummary({ cart, deliveryOptions, loadCart}) {
    return (
        <div className="order-summary">

            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find(option => option.id === cartItem.deliveryOptionId);

                return (
                    <div key={cartItem.product.id} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {selectedDeliveryOption ? dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D') : ''}
                        </div>

                        <div className="cart-item-details-grid">
                            <CartItemDetails cartItem={cartItem} loadCart={loadCart} />

                            <DeliveryOption deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
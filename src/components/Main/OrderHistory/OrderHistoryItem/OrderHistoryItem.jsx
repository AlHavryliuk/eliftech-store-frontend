import { convertData } from "utils/formatterURL/formatterData";
import { OrderItem } from "../OrderHistory.styles";

const OrderHistoryItem = ({ order }) => {

    const { _id: id, items, createdAt } = order;

    const getStoreName = () => items[0].storeName
    const getTotalPrice = () => items.reduce((acc, { totalPrice }) => acc + +totalPrice, 0).toFixed(2)

    return (
        <>
            <OrderItem>{id}</OrderItem>
            <OrderItem>{getStoreName()}</OrderItem>
            <OrderItem>{convertData(createdAt)}</OrderItem>
            <OrderItem>{getTotalPrice()}</OrderItem>
            <OrderItem>Success</OrderItem>
        </>
    )
}

export default OrderHistoryItem
import { nanoid } from "nanoid"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersThunk } from "store/ordersReducer/orderOperations"
import { reselect, select } from "store/selectors/selector"
import { OrderHistoryMain, OrderItem, OrderList, OrderTitle } from "./OrderHistory.styles"
import OrderHistoryItem from "./OrderHistoryItem/OrderHistoryItem"

const OrderHistory = () => {
    const authCompleted = useSelector(reselect.authCompleted)
    const dispatch = useDispatch()
    const user = useSelector(select.user)
    const orders = user?.orders ?? []

    useEffect(() => {
        if (!authCompleted) return
        dispatch(getOrdersThunk())
    }, [dispatch, authCompleted])

    return (
        <OrderHistoryMain>

            <OrderTitle>Orders:</OrderTitle>
            <OrderList>
                <OrderItem>Id: </OrderItem>
                <OrderItem>Store Name: </OrderItem>
                <OrderItem>Data: </OrderItem>
                <OrderItem>TotalPrice: </OrderItem>
                <OrderItem>Status: </OrderItem>
                {orders.length && authCompleted ?
                    orders.map((order) => <OrderHistoryItem key={nanoid(4)} order={order} />) : false}
            </OrderList>
        </OrderHistoryMain>
    )
}

export default OrderHistory
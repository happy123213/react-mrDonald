import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../Slyle/ModalButton';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../functions/secondaryFunctions';
import { formatCurrency } from '../functions/secondaryFunctions';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    display: flex;
    flex-direction: column;
    left: 0;
    background: #fff;
    min-width: 380px;
    height: calc(100% - 80px);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, .25);
    padding: 20px;
`;

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 30px;
`;

const OrderContent = styled.div`
    flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div`
    display: flex;
    margin: 0 35px 30px;
    & span:first-child{
        flex-grow: 1;
    }
`;

const TotalPrice = styled.span`
    text-align: right;
    min-width: 65px;
    margin-left: 20px;
`;

const EmptyList = styled.p`
    text-align: center;
`;

export const Order = ({orders }) => {

    const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

    const totalCounter = orders.reduce((result, order) => order.count + result, 0);

    return (
        <OrderStyled>
            <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
            <OrderContent>
                {orders.length ?
                <OrderList>
                    {orders.map(order => <OrderListItem order={order}/>)}
                </OrderList> :
                <EmptyList>Список заказов Пуст</EmptyList>}
            </OrderContent>
            <OrderTotal>
                <span>Итого</span>
                <span>{totalCounter}</span>
                <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </OrderTotal>
            <ModalButton>Оформить</ModalButton>
        </OrderStyled>
    )
}
import React from 'react';
import styled from 'styled-components';
import { ThunderboltFilled } from '@ant-design/icons';

const ProductsList = ({imageProduct, description, price, discount, priceTagFraction, priceTag, shipping}) => {
    return (
        <Container>
        <ListProd>
            <ProcutImage src={imageProduct} alt="Producto" />
            <div>
                <Description>{description}</Description>
                <ContainerPrice><Price>$ {price}</Price><GreenText> {discount}% OFF</GreenText></ContainerPrice>
                <GreenText>12 x ${priceTagFraction} {priceTag}</GreenText>
                <ContainerGT><GreenText>{shipping}</GreenText><ThunderboltFilled style={{ fontSize: '14px', color: '#00A650' }} /></ContainerGT>
                
            </div>
        </ListProd>
        </Container>
    );
};

const Container = styled.div`
    background: #a1b2c3;
`;

const ListProd = styled.div`
    display: flex;
    /* border-bottom: ridge; */
    border-top-style: outset;
    font-size: 14px;
    background-color: rgb(78, 78, 78) !important;
`;

const ProcutImage = styled.img`
    width: 140px;
    height: 105px;
    padding: 0 16px;
`;

const Description = styled.p`
    margin-bottom: 0px;
`;

const Price = styled.span`
    font-size: 20px;
`;
const GreenText = styled.span`
    color: #00A650;
    margin-top: 1px;
    padding: 0;
    font-weight: 400;
`;

const ContainerPrice = styled.p`
    margin-top: 0;
    margin-bottom: 0;
`;

const ContainerGT = styled.p`
    margin-top:0;
`;

export default ProductsList;
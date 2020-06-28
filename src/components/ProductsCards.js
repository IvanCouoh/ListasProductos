import React from 'react';
import styled from 'styled-components';
import { ThunderboltFilled } from '@ant-design/icons';


const ProductsCards = ({imageProduct, description, price, discount, priceTagFraction, priceTag, shipping}) => {
    return (
        <Container>
        <ListProd className="item">
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
`;

const ListProd = styled.div`
  /* display: grid;
  grid-template-row: 50% 50%; */
    /* display: flex;
    flex-direction: column;
    border-bottom: ridge;
    font-size: 14px;
    background: #fff; */
`;

const ProcutImage = styled.img`
    /* width: 140px;
    height: 105px; */
`;

const Description = styled.p`
    /* margin-bottom: 0px; */
`;

const Price = styled.span`
    /* font-size: 20px; */
`;
const GreenText = styled.span`
    /* color: #00A650;
    margin-top: 1px;
    padding: 0;
    font-weight: 400; */
`;

const ContainerPrice = styled.p`
    /* margin-top: 0;
    margin-bottom: 0; */
`;

const ContainerGT = styled.p`
    /* margin-top:0; */
`;

export default ProductsCards;
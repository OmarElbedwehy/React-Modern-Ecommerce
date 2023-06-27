import { useState } from "react"
import planeImg from "../assets/plane.png"
import { ProductsData } from "../data/products"

const Products = ()=>{
    const [productsData, setProductsData] = useState(ProductsData);

    const filterData = (type)=>{
        setProductsData(ProductsData.filter(product => product.type === type))
    }
    return(
        <div className="products_container">
            <div className="header">
                <img src={planeImg} alt="Plane" />
                <h1>Our Feature Products</h1>
            </div>
            <div className="products">
                <ul className="products_menu">
                    <li onClick={() => setProductsData(ProductsData)}>all</li>
                    <li onClick={() => filterData("skin care")}>skin care</li>
                    <li onClick={() => filterData("conditioner")}>conditioner</li>
                    <li onClick={() => filterData("foundation")}>foundation</li>
                </ul>
                <div className="products_content">
                    {
                        productsData.map((product, index)=>{
                            const {name, detail, price, img, type} = product
                            return(
                                <div className="product" key={index}>
                                    <div className="text_content">
                                        <div className="name">
                                            <span>{name}</span>
                                            <span>{detail}</span>
                                        </div>
                                        <span className="price">{price}$</span>
                                        <button>Shop Now</button>
                                    </div>
                                    <img src={img} alt={name} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products;
import React, {Component} from 'react';
import axios from 'axios';

class Purchases extends Component {
    constructor(props) {
        super(props);

        this.state = {
            goods: []
        };
    }

    componentDidMount() {
        axios.get(this.props.url)
            .then(res => {
                const goods = res.data.items;
                this.setState({goods: goods});
            })
    }

    renderItems() {
        return this.state.goods.map((item, index) =>
            <div className="goods-item" key={item.id}>
                <table className="goods-item-table">
                    <tbody>
                    <tr>
                        <td className="text-center" width="110px">
                            <img className="goods-item-img img-responsive" src={item.src} alt={item.title}/>
                        </td>
                        <td>
                            <div className="goods-item-text">
                                <h3 className="goods-item-title font-weight-bold">{item.title}</h3>
                                <p className="goods-item-description font-weight-bold">{item.description}</p>
                                <p className="goods-item-price">{item.price}.00 <span>RUB</span></p>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary goods-item-btn text-uppercase">Закупка</button>
            </div>
        )
    }

    render() {
        if (!this.state.goods.length > 0) {
            return <div>Loading...</div>
        }

        return (
            <div className="container goods-container">{this.renderItems()}</div>
        )
    }
}

export default Purchases;
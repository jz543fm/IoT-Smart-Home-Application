import React, { Component } from 'react';

// import img from '../../assets/images/lightsMap.png';
import LightsMap from '../../components/Lights/LightsMap';
// import classes from './Lights.css';

class Lights extends Component {
    componentDidMount () {
        // this.props.onFetchOrders();
    }

    componentWillMount () {
        
    }

    render () {

        return (
            <div>
                {/* {orders} */}
                <LightsMap/>
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         orders: state.order.orders,
//         loading: state.order.loading
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         onFetchOrders: () => dispatch( actions.fetchOrders() )
//     };
// };

// export default connect( mapStateToProps, mapDispatchToProps )( withErrorHandler( Orders, axios ) );
export default Lights;
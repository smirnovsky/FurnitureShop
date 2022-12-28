import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Chair',
          img: 'chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Bed',
          img: 'bed.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'Beds',
          price: '249.99'
        },
        {
          id: 3,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'tables',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Dresser',
          img: 'dresser.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'dressers',
          price: '100.99'
        },
        {
          id: 5,
          title: 'Armchair',
          img: 'armchair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'armchairs',
          price: '129.99'
        },
        {
          id: 6,
          title: 'Bar stool',
          img: 'bar-stool.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'bar stools',
          price: '99.99'
        }
      ]
    }

    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }

  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;

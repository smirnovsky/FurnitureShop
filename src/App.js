import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Chair',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Bed',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'Beds',
          price: '249.99'
        },
        {
          id: 3,
          title: 'Table',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'tables',
          price: '99.99'
        },
        {
          id: 4,
          title: 'Dresser',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'dressers',
          price: '100.99'
        },
        {
          id: 5,
          title: 'Armchair',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'armchairs',
          price: '129.99'
        },
        {
          id: 6,
          title: 'Bar stool',
          img: '#',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
          category: 'bar stools',
          price: '99.99'
        }
      ]
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
        <Footer />
      </div>
    );
  }
}

export default App;

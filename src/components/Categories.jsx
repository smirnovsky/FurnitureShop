import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'Beds',
                    name: 'Beds'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'dressers',
                    name: 'Dressers'
                },
                {
                    key: 'armchairs',
                    name: 'Armchairs'
                },
                {
                    key: 'bar stools',
                    name: 'Bar stools'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
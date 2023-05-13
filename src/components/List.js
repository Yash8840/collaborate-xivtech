import React from 'react';
import style from './List.module.css'
import Card from './Card';

const List = (props) => {
  return (
    <div className={style.container}>
      {props.data.map((item)=>{
         return <Card item={item} key={Math.random()}/>
      })}
    </div>
  )
}

export default List
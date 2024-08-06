import React from 'react'
import { News } from './news/News'
import { StockMarket } from './stockMarket/StockMarket'
import { Advertising } from './advertising/Advertising'
import './Box.css'

export const BoxNews = () => {
    const data = [
        {id: 1, name: 'Тема1(active)', active: true, content: [
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
        ]},
        {id: 2, name: 'Тема2', active: false, content: [
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
        ]},
        {id: 3, name: 'Тема3', active: false, content: [
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
            {icon: 'иконка', title: 'Новость', url: '#'},
        ]},
    ]

    const dataStock = [
        {name: 'Вид', cost: 'Стоимость', ratio: 'Коэф'},
        {name: 'Вид', cost: 'Стоимость', ratio: 'Коэф'},
        {name: 'Вид', cost: 'Стоимость', ratio: 'Коэф'}
    ]

    const dataAdvent = [
        {img: '#', alt: 'img', title: 'Title', subtitle: 'SubTitle'},
    ];


  return (
    <div className='containerNews'>
        <div className='containerBoxNews'>
            <News data={data}/>
            <StockMarket dataStock={dataStock}/>
        </div>
        <Advertising dataAdvent={dataAdvent}/>
    </div>
  )
}

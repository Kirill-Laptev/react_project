import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount/pageSize);

    let pages = [];

    for(let i = 1; i <= pagesCount; i++){  
      pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize); // Сколько всего порций у нас получится

    // Используем хук для создания локального state

    let [portionNumber, setPortionNumber] = useState(1);

    // Определяем левую границу порции для это используем формулу

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize;  // С правой границей полегче


    

    return (
      <div>
      {portionNumber > 1
      ? <button onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>  // Только если у нас номер порции больше 1 - показываем кнопку влево
      : ''}

       {pages
       .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber ) // Делаем фильтрацию, которая возвращает массив только в определенном диапазоне, например числа от 21 до 30
       .map((page) => {
          return <span className={currentPage === page ? styles.selectedPage : ''}
          onClick={ () => {onPageChanged(page)}}>{page + ' '}</span>
        })}

      {portionCount > portionNumber // Стрелка вправо будет показываться только тогда когда количество порций больше, чем количество текущей порции
      ? <button onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button> // При клике на стрелку устанавливаем номер  порции больше на 1
      : ''} 
      </div>                    
    );
  }


export default Paginator;
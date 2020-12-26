import React from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount/pageSize);

    let pages = [];

    for(let i = 1; i <= 20; i++){  // Временно выводим 20 страниц
      pages.push(i);
    }

    return (
      <div>
       {pages.map((page) => {
          return <span className={currentPage === page ? styles.selectedPage : ''}
          onClick={ () => {onPageChanged(page)}}>{page + ' '}</span>
        })}
      </div>
    );
  }


export default Paginator;
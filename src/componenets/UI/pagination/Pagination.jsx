import React from 'react';
import { getPagesArray } from '../../../utils/pages';


const Pagination = ({totalPages, page, changePage}) => {
   let pagesArray = getPagesArray(totalPages)


  return (
   <div style={{display: 'flex', justifyContent: 'space-evenly', margin:  '0 auto', width: 600, marginBottom: 50}}>
      {pagesArray.map(p => <button key={p} className={page === p ? "page_current page" : "page"} onClick={() =>  changePage(p)}>{p}</button> )}
   </div>
);

} 

export default Pagination;
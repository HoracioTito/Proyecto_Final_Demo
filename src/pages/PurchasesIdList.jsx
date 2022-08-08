import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getPurchasesListTrunk } from '../store/slices/purchases.slice';


const PurchasesIdList = () => {

 /* Param Id */  
 const {id } =useParams()

 /* Global Purchases */
 const purchases = useSelector((state) => state.purchases)


 const dispatch= useDispatch()

 /* List data Trunk  */

 useEffect(()=>{
     
     dispatch( getPurchasesListTrunk(id))
 },[id] )
   
 console.log(purchases)

    return (
        <div>
           <p>Purchases  List {id}</p>
           {
             purchases.map((productId)=>(
                <div>{productId.id}</div>
                
             ))

           }

        </div>
    );
};

export default PurchasesIdList;
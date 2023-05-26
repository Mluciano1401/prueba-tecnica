import { useEffect, useState } from 'react';
//import './Styles/App.css'
import * as api from '../../Services/Controllerapi';
import {Card} from '../Cards/Card';

export function GenericSession() {  
  const [data, setData] = useState([])
  //const token =  sessionStorage.getItem('token');
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBwLmRlYWxlcmFwcGNlbnRlci5jb20iLCJhdWQiOiJodHRwczpcL1wvYXBwLmRlYWxlcmFwcGNlbnRlci5jb20iLCJqdGkiOiI2NjI2YTQ2Ny04ZmQ4LTRiYjMtYWU2Yy0xYzc0NDRiYTI1MWEiLCJpYXQiOjE2ODUxMjM4MTMsIm5iZiI6MTY4NTEyMzgxMywiZXhwIjoxNjg1NDI2MjEzLCJzZXNzaW9uSWQiOiI2NjI2YTQ2Ny04ZmQ4LTRiYjMtYWU2Yy0xYzc0NDRiYTI1MWEiLCJlbWFpbCI6Im1hZ2FyY2lhQGVtYWlsLmNvbSIsImlkIjo5MTB9.Gx4hNp4p8Wpe-xzReFAOzcyrvXMOSTHPApUFQyzxRxHSavleLN2G8gS3vtQBstNKpZLk1PmCz6qrObpQKeXXLg"
  useEffect(()=>{
    getData();
  });

  const getData = async () => {
    const result = await api.Get("users", token);
    setData(result);
  }
  
  return (
    <>
     <section>
        {
          data.map(item => (
            <Card key={item.id} data={item}></Card>
          ))
        }
     </section>
    </>
  )
}

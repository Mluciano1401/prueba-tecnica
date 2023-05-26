import '../../Styles/Cards.css'

export function Card({data}) {
  return (
    <>
     <div className='card-box'>
        <h3>{data.firstname + " " + data.lastname}</h3>
        <section className='wrapper-info-box'>
          <div className='info-box'>
            <strong>Email:</strong>
            <span>{data.email}</span>
            <strong>Company:</strong>
            <span>{data.default_company}</span>
          </div>
        </section>
        
     </div>
    </>
  )
}

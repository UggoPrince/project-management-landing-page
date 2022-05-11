export const Header = (props) => {
  return (
    <header id='header' className="mt-5">
      <div className="container">
      <div className='row justify-content-center intro mt-100'>
        <div className='col col-md-5 intro-text site-text-color'>
          <h1>
            {props.data ? props.data.title : 'Loading'}
            <span></span>
          </h1>
          <p>{props.data ? props.data.paragraph : 'Loading'}</p>
        </div>
        <div className="col col-md-7 intro-text site-text-color hero-bg">
          <h1>
              {props.data ? props.data.title : 'Loading'}
              <span></span>
            </h1>
            <p>{props.data ? props.data.paragraph : 'Loading'}</p>
        </div>
      </div>
      </div>
    </header>
  )
}

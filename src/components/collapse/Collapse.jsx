import React from 'react'

export const Collapse = () => {
    const [test, setTest] = React.useState(false);


  const handleClick = () => {
    console.log('test')
    setTest((p) => !p);
  }

  return (
    <div className='containerCol'>
        <button onClick={handleClick} className="btnCol">Click1</button>
        <div className={`collapse ${test ? '' : 'hide'}`}>
            <div>
                111 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, rem exercitationem ullam voluptas, earum laborum incidunt quod mollitia quam distinctio inventore fugiat, nisi fugit molestias. Soluta impedit mollitia voluptatem expedita!
            </div>
        </div>
    </div>
  )
}

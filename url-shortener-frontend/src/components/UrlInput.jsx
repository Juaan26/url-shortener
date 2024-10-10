import './UrlInput.css'
export function UrlInput() {
    return (
        <div className='url-container'>
            <div className='url-subcontainer'>
                <h2> PEGA LA URL QUE QUIERAS ACORTAR</h2>
                <div className='url-inputs'>
                    <input type="text" name="" id="" className='input-text' />
                    <a href="#">
                    <button type="submit" className='btn-submit'><img src="/rockets2.svg" width={"50px"} height={"30px"} color={"white"} alt="" /></button>
                    </a>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

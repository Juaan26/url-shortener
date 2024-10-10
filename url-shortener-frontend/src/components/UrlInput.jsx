import './UrlInput.css'
import { StarField } from './StarField.jsx';

export function UrlInput() {
    return (
        <div className='url-container'>
             
            <div className='url-subcontainer'>
            <StarField/> 
                <h2 className='url-subcontainer-h2'> PEGA LA URL QUE QUIERAS ACORTAR</h2>
                <div className='url-inputs'>
                    <input type="text" name="" id="" className='input-text' />
                    <a href="#">
                    <button type="submit" className='btn-submit'><img className="url-svg" src="/rockets2.svg"  alt="" /></button>
                    </a>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

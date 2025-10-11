import './ImageLinkForm.css';

export default function ImageLinkForm() {
    return(
        <div>
            <p className="f3" style={{textAlign:'center'}}>
                {'This Magic Brain will detect faces in your picture'}
            </p>
            <div className="center">
                <div className="form center">
                    <input type="text" className="f4 pa2 w-70 center" />
                    <button className="w-30 grow f4 link ph3 pv2 dib white">Detect</button>
                </div>
            </div>
        </div>
    );
}
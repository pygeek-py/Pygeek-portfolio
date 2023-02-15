import React from 'react'

const Body = () => {
    return (
        <div>
            <div className="bodybox">
                <div className="unflex">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 42C32.5986 42 42 32.5986 42 21C42 9.40144 32.5986 0 21 0C9.40144 0 0 9.40144 0 21C0 32.5986 9.40144 42 21 42ZM19.4473 8.42756H22.0723V20.0904 H33.7365V22.7154H19.4473 V8.42756ZM11.6261 9.00112H14.2511V27.7476H32.9976V30.3726H11.6261V9.00112Z" fill="#E6767A"/>
                </svg>
                <h1 className="bodyone">TrackPay</h1>
                </div>
                <div className="bodyinp">
                    <h3 className="bodythree">
                        Email<span className="bodyspa">*</span><br />
                        <input type="email" className="inp" />
                    </h3>
                    
                    
                    <h3 className="bodythree">
                        Password<span className="bodyspa">*</span><br />
                        <input type="password" className="inp" />
                    </h3>
                    
                    <h3 className="bodythrees">Forgot Password?</h3>

                    <button type="submit" className="bodylog">Login</button>

                    <div className="or">
                        <div className="orone"></div>
                        <h3 className="bodythreen">OR</h3>
                        <div className="orone"></div>
                    </div>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.80558.0415H19V8H10V12H15.6515C14.827 14.3285 12.6115 1610 16C6.6865 16 4 13.3135 410C4 6.6865 6.6865 4 104C11.5295 4 12.921 4.577 13.9805 5.5195L16.8092.691C15.023 1.0265 12.6340 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20C15.5225 20 20 15.5225 20 10C20 9.3295 19.931 8.675 19.8055 8.0415Z" fill="#FFC107"/>
                </svg>
                <br /><br /><br /><br />
                </div>
            </div>
            <div className="footer">
                    <div className="long"></div>
                    <div className="foot">
                        <div className="footone">
                            <h3 className="bodythree">Terms of Service</h3>
                            <h3 className="bodythree">Privacy Policy</h3>
                            <h3 className="bodythree">Legal Notice</h3>
                        </div>
                        <h3 className="bodythree">@ 2023 TrackPay</h3>
                    </div>
            </div>
        </div>
    )
}

export default Body;

import React, { useEffect } from 'react'; 
import {CDN} from '../config';   
// import { Axios } from 'axios'; 
import * as others from 'axios';

import fileDownload from 'js-file-download';

function SocialMedia(){

    // function download(url, filename) {  
    //     others.get(url, { 
    //         responseType: 'blob',
    //     }).then((res) => {
    //       fileDownload(res.data, filename);
    //     });

    //     console.log("download")

    //     // others(url, { 
    //     //     method: 'GET',
    //     //     responseType: 'blob', // important
    //     // }).then((response) => {
    //     //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     //     const link = document.createElement('a');
    //     //     link.href = url;
    //     //     link.setAttribute('download', 'file.pdf'); //or any other extension
    //     //     document.body.appendChild(link);
    //     //     link.click();
    //     // });
    //   }
    

    return(
        <div className='social_media-page'>
            <h1>Social Media 3d Icons</h1>

            <div className="social_media-container">
                <div className="social_media" style={{textAlign:'center'}}>

                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_FBW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_FBB.png`} alt="" />
                            </div>
                        </div>  
                    </div>
                    
                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_WAW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_WAB.png`} alt="" />
                            </div>
                        </div>  
                    </div>

                </div>

                <div className="social_media" style={{textAlign:'center'}}>

                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <a download className="image-download" href="https://d39w1it2s36axc.cloudfront.net/images/Resources/Social%20Media/Facebook_normal.png">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </a>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_SCW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_SCB.png`} alt="" />
                            </div>
                        </div>  
                    </div>

                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_LIW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_LIB.png`} alt="" />
                            </div>
                        </div>  
                    </div>

                </div>

                <div className="social_media" style={{textAlign:'center'}}>

                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_TEW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_TEB.png`} alt="" />
                            </div>
                        </div>  
                    </div>

                    <div style={{display:"flex", flexDirection:"row", gap:'32px'}}>
                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_TWW.png`} alt="" />
                            </div>
                        </div>

                        <div className="social_media-thumbnail">
                            <div className="image-download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id='download-icon' d="M12 7V17M12 17L15.5 13.5217M12 17L8.5 13.5217" stroke="#0D0E13" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="1.25" stroke="#0D0E13" stroke-width="1.5"/>
                                </svg> 
                            </div>

                            <div className="social_media-white">
                                <img src={`${CDN}/images/Resources/Social Media/Thumb/Thumb_TWB.png`} alt="" />
                            </div>
                        </div>  
                    </div>

                </div>

            </div>

            <div id="supportByBMC"></div>   

        </div>
    )
}

export default SocialMedia
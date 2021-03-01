import React, { Component } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import { fileUpload, getActivePosts } from "api/index"
import Flag from 'react-world-flags'
import { countries } from 'country-data';
import { baseUrl } from 'apiUrl';
import { sortByDate } from "component/sort"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            postlist1: {},
            fileUrl: "",
        };
    }

    componentDidMount() {
        let { fileUrl } = this.state
        fileUrl = baseUrl
        this.setState({ fileUrl })
        this.getCountryPost()
    }

    getCountryPost = async () => {
        let { postList, postlist1 } = this.state
        let response = await getActivePosts()

        if (response && response.length > 0) {
            let resp = []
            response.map((res, i) => {
                let check = localStorage.getItem(res?.countryCode)
                if (!check) {
                    let countryName = countries[res?.countryCode].name
                    res["countryName"] = countryName
                    resp.push(res)
                }
            })
            resp.map((res, i) => {
                i == 0 ? postlist1 = res : postList.push(res)
            })
            this.setState({ postList, postlist1 })
        }
    }


    render() {
        let { postList, fileUrl, postlist1 } = this.state
        return (
            <div>
                {/* Common Header  */}
                <Header />
                {/* End of Common Header  */}

                {/* start of mid section */}
                <div className="homeCntnt msgsContent">
                    <div className="wrapperCstm cstmGrid">

                        {/* <div className="custmItem">
                          <div className="msgSec" style={{height:'132px', width:'452px'}}></div>
                        </div>  */}

                        {postlist1 && postlist1 !== null && postlist1?.imageUrl ?
                            <div className="custmItem">
                                <div className="msgSec msgBlankSpc">
                                    <div className="msgSecImg"><img src={fileUrl + "/" + postlist1?.imageUrl} alt="" title="" /></div>
                                    <div className="captionSec">
                                        <div className="captionFlag"><img src={require(`../../assets/countries/${postlist1?.countryName}-Flag-icon.png`)} alt="" title="" /></div>
                                        <p>{postlist1?.caption}</p>
                                    </div>
                                </div>
                                {postlist1?.message &&
                                    <div>
                                        <div className="msgTxt">
                                            <p>{postlist1?.message}</p>
                                        </div>
                                        <p>
                                            <span className="myName">{postlist1?.userName}</span>
                                        </p>
                                    </div>
                                }

                            </div>
                            :
                            <div className="msgSection custmItem">
                                <div className="msgSec msgBlankSpc">
                                    <div className="msgFlag"><a><img src={require(`../../assets/countries/${postlist1?.countryName ?? "Default"}-Flag-icon.png`)} alt="" title="" /> </a></div>
                                    <div className="msgTxt"><p>{postlist1?.message}</p></div>
                                    <p>
                                        <span className="myName">{postlist1?.userName}</span>
                                    </p>
                                </div>
                            </div>
                        }

                        {postList && postList.length > 0 && postList.map(posts => (
                            <div>
                                {posts?.imageUrl ?
                                    <div className="custmItem">
                                        <div className="msgSec">
                                            <div className="msgSecImg"><img src={fileUrl + "/" + posts?.imageUrl} alt="" title="" /></div>
                                            <div className="captionSec">
                                                <div className="captionFlag">
                                                    <img src={require(`../../assets/countries/${posts?.countryName}-Flag-icon.png`)} alt="" title="" />
                                                </div>
                                                <p>{posts?.caption}</p>
                                            </div>
                                        </div>
                                        <div className="msgTxt">
                                            {posts?.message && <p>{posts?.message}</p>}
                                        </div>
                                        {postlist1?.message && <p>
                                            <span className="myName">{posts?.userName}</span>
                                        </p>}
                                    </div>
                                    :
                                    <div className="custmItem">
                                        <div className="msgSection msgSec">
                                            <div className="msgFlag"><a>
                                                <img src={require(`../../assets/countries/${posts?.countryName}-Flag-icon.png`)} alt="" title="" />
                                            </a></div>
                                            <div className="msgTxt"><p>{posts?.message}</p></div>
                                            <p>
                                                <span className="myName">{posts?.userName}</span>
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}


                        {/* <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fr.png')} alt="" title="" /></div>
                                    <p><span>My name</span> - Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgFlag"><a><img src={require('../../assets/images/be.png')} alt="" title="" /></a></div>
                                <div className="msgTxt">
                                    <p>Here is my message labore et dolore magna adivqua. Quis ipsum suspendisse divtrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facidivsis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images3.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/be.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="msgSection custmItem">
                            <div className="msgSec">
                                <div className="msgFlag"><a><img src={require('../../assets/images/fr.png')} alt="" title="" /></a></div>
                                <div className="msgTxt">
                                    <p>Here is my message labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images5.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="msgSection custmItem">
                            <div className="msgSec">
                                <div className="msgFlag"><a><img src={require('../../assets/images/fr.png')} alt="" title="" /></a></div>
                                <div className="msgTxt">
                                    <p>Here is my message labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fr.png')} alt="" title="" /></div>
                                    <p><span>My name</span> - Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images3.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/be.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="msgSection custmItem">
                            <div className="msgSec">
                                <div className="msgFlag"><a><img src={require('../../assets/images/fr.png')} alt="" title="" /></a></div>
                                <div className="msgTxt">
                                    <p>Here is my message labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images5.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="msgSection custmItem">
                            <div className="msgSec">
                                <div className="msgFlag"><a><img src={require('../../assets/images/fr.png')} alt="" title="" /></a></div>
                                <div className="msgTxt">
                                    <p>Here is my message labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                                    Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fr.png')} alt="" title="" /></div>
                                    <p><span>My name</span> - Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images3.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/be.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fr.png')} alt="" title="" /></div>
                                    <p><span>My name</span> - Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images4.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/fi.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div>

                        <div className="custmItem">
                            <div className="msgSec">
                                <div className="msgSecImg"><img src={require('../../assets/images/images3.jpg')} alt="" title="" /></div>
                                <div className="captionSec">
                                    <div className="captionFlag"><img src={require('../../assets/images/be.png')} alt="" title="" /></div>
                                    <p>Here is the image caption</p>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
                {/* end of mid section */}

                {/* Common Footer */}
                < Footer />
                {/* End of Common Footer */}

            </div >
        );
    }
}
export default Index;
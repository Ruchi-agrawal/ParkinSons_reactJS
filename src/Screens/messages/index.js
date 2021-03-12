import React, { Component } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';
import { fileUpload, getActivePosts, checkAllUser } from "api/index"
import { countries } from 'country-data';
import { baseUrl } from 'apiUrl';
import moment from "moment"
import CircularProgress from '@material-ui/core/CircularProgress';
import { sortByDate } from "component/sort"
import { resizeAllGridItems } from "Screens/Component/manageGridItem"
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
            postlist1: [],
            fileUrl: "",
            nodata: true
        };
    }

    componentDidMount() {
        let { fileUrl } = this.state
        fileUrl = baseUrl
        this.setState({ fileUrl })
        this.getCountryPost()
    }
    componentDidUpdate(){
        resizeAllGridItems("custmItem")
    }

    checkUserAndPost = async (response) => {
        let UserId = []
        let resp = []
        response.map(async (res, i) => {
            UserId.push(res.userId)
            let check = localStorage.getItem(res?.countryCode)
            if (!check) {
                let countryName = countries[res?.countryCode].name
                if (countryName == "Russian Federation") {
                    countryName = "Russia"
                }
                res["countryName"] = countryName
                resp.push(res)
            }
        })
        let value = await checkAllUser(UserId)
        if (value?.length > 0) {
            let value1 = await this.checkUserBlockTime(value, resp)
            return value1
        } else {
            return resp
        }
    }

    checkUserBlockTime = (value, resp) => {
        let array = []
        resp?.length > 0 && resp.map(posts => {
            let ifUser = value.filter(users => {
                return posts.userId == users.userId
            })
            if (ifUser.length > 0) {
                let postCreateTime = moment(posts?.date)
                let userBlockedTime = moment(ifUser[0]?.blockedAt)
                if (userBlockedTime > postCreateTime) {
                    array.push(posts)
                }
            } else {
                array.push(posts)
            }
        })
        return array
    }


    getCountryPost = async () => {
        let { postList, postlist1 } = this.state
        let response = await getActivePosts()
        if (response && response.length > 0) {
            let resp = await this.checkUserAndPost(response)
            resp.reverse()
            resp && resp.length > 0 && resp.map((res, i) => {
                i == 0 ? postlist1 = res : postList.push(res)
            })
                resizeAllGridItems("custmItem")
            this.setState({ postList, postlist1 })
        }
        setTimeout(() => {
            this.setState({ nodata: false })
        }, 2200)
    }


    render() {
        let { postList, fileUrl, postlist1, nodata } = this.state
        setInterval(() => {
            this.getCountryPost()
        }, 600*1000);
        return (
            <div>
                {/* Common Header  */}
                <Header />

                {/* End of Common Header  */}

                {/* start of mid section */}
                <div className="homeCntnt msgsContent">
                    {nodata && <div className="circularProgressMessage" >
                        <CircularProgress className="w-1 mr-1 mb-2 MuiCircularProgress-root" color="secondary" thickness={4} />
                    </div>}
                    <div className="wrapperCstm cstmGrid">

                        {/* <div className="custmItem">
                          <div className="msgSec" style={{height:'132px', width:'452px'}}></div>
                        </div>  */}

                        {postlist1 && postlist1?.imageUrl ?
                            <div className="custmItem">
                                <div className="msgSec msgBlankSpc msgSecBg">
                                    <div className="msgSecImg">
                                        <div><img src={fileUrl + "/" + postlist1?.imageUrl} alt="" title="" /></div>
                                        <div className="captionSec">
                                            <div className="captionFlag"><img src={require(`../../assets/countries/${postlist1?.countryName}-Flag-icon.png`)} alt="" title="" /></div>
                                            <p>{postlist1?.caption}</p>
                                        </div>
                                    </div>
                                    {postlist1?.message &&
                                        <div>
                                            <div className="msgTxt"><p>{postlist1?.message}</p></div>
                                            <div><label className="myName">{postlist1?.userName}</label></div>
                                        </div>
                                    }
                                </div>
                            </div>
                            : postlist1 && postlist1?.message ?
                                <div className="msgSection custmItem">
                                    <div className="msgSec msgBlankSpc msgBlankTxt">
                                        <div className="msgFlag"><a><img src={require(`../../assets/countries/${postlist1?.countryName ?? "Default"}-Flag-icon.png`)} alt="" title="" /> </a></div>
                                        <div className="msgTxt"><p>{postlist1?.message}</p></div>
                                        <div><label className="myName">{postlist1?.userName}</label></div>
                                    </div>
                                </div> :
                                <></>
                        }

                        {postList && postList.length > 0 && postList.map(posts => (
                            <div className="custmItem">
                                {posts?.imageUrl ?
                                    <div className="msgSec msgSecBg">
                                        <div className="msgSecImg">
                                            <div><img src={fileUrl + "/" + posts?.imageUrl} alt="" title="" /></div>
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
                                        {postlist1?.message &&
                                            <div><label className="myName">{posts?.userName}</label></div>}
                                    </div>
                                    :
                                    <div className="msgSection msgSec">
                                        <div className="msgFlag"><a>
                                            <img src={require(`../../assets/countries/${posts?.countryName}-Flag-icon.png`)} alt="" title="" />
                                        </a></div>
                                        <div className="msgTxt"><p>{posts?.message}</p></div>
                                        <div><label className="myName">{posts?.userName}</label></div>
                                    </div>
                                }
                            </div>
                        ))}

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
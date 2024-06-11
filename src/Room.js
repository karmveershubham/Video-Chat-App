import React from "react";
// import './App.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from "react-router-dom";

function Room(){
    const {roomID}=useParams()
      let myMeeting = async (element) => {
        const appID = 1475980614;
        const serverSecret = "4d9b393ea6c48ffd48b5731250cccf01";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "Shubham");
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });

    }
    return(
        <div className="App" ref={myMeeting}>
            Room
        </div>
    )
}

export default Room
import React from 'react';

export default function LessonSection() {
    return (
        <div style={{ padding: "50px", marginTop: "100px" }}>
            <div style={{ flexDirection: "row", float: "left" }}>
                <div style={{ display: "flex", }}>
                    <div style={{ padding: "5px" }}>
                        <span><i class="fas fa-play fa-flip-horizontal"></i></span>
                    </div>
                    <div style={{ padding: "5px" }}>
                        <span>Videos</span>
                    </div>
                </div>
            </div>
            <div style={{ flexDirection: "row" }}>
                <div style={{ marginTop: "50px", padding: "80px" }}>
                    <div style={{ background: "white", borderRadius: "5px", height: "38px", }}>
                        <span style={{ float: "left", padding: "10px" }}>
                            Insert URL here
                        </span>
                    </div>
                    <br></br>
                    <span>or</span>
                    <br></br>
                    <div style={{ background: "white", borderRadius: "5px", width: "200px", height: "220px", float: "left" }}>
                        <div style={{ paddingTop: "100px", paddingBottom: "110px" }}>
                            <span >
                                Upload
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

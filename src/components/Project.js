function Project() {
    return(
        <div className="h1">
        <div className="ok2">
            <h2> Architecture Concepts</h2><br></br><br></br>
            <h4>Assign to :</h4>
            <a href="www.google.com">Bride jenek</a>
            <br/>
            <h4>Assign by:</h4>
            <a href="www.google.com">Suzette Goldstein</a><br/>
            <h4>Duo Date:</h4>
            11/11/2023<br/>
            <h4>Project</h4>
            38th st
            <br/>
            <h4>Status</h4>
            <button type="primary" id="ou1">IN progress</button>
            <h4>priorty</h4><br></br>
            <button type="danger"id="ou2">medium</button>

        </div>
        <div className="des1">
            <h3>Description</h3><br/>
            <p>Conduct extensive research to gather inspiration from various sources. This research can include studying historical precedents,
                 exploring architectural trends, and seeking innovative design solutions. Based on the information gathered from the client, site analysis, 
                 <p>and research,senior architects begin the process of developing a design concept. This is the foundational idea that will guide the entire project. </p>
                 <p>The concept should align with the client's objectives, site conditions, and the firm's design philosophy
</p>
            </p>
        </div>
        <div className="doc">
            <h3>Documentation</h3>
            <input type="file"/>
        </div>
        <div className="po">
            <h3>Post an Update</h3>
            <textarea rows='5'></textarea>
            <button>post update</button>
        </div>
       
     </div>       
    )
}
export default Project;
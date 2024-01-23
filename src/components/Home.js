import "./component.css"

function Home() {
    return(

             <div className="ho">
                <div className="ok">
                    <h2>Create Architecture Concepts</h2>
                </div>
                <form>
                   <div className="title">
                   <label>Title</label><br/>
                    <input type="text" placeholder="Create Architectual Concepts" id="ff"/>
                   </div>
                  <div className="assign">
                  <label id="ass">Assign To</label><br/>
                    <input type="text" placeholder="Luke bridle" />
                  </div>
                  <br/><br/>
                  <br/>
                  <div className="date">
                    <label>Due Date</label><br/>
                    <input type="datetime-local" id="dt"/>
                     
                  </div>
                  <div className="per">
                    <label>Priority</label>
                    <br/>
                    <select name="prior" id="pr">
                        <option value="high">High</option>
                        <option value="Medium">medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <div className="qur">
                        <label>Is This goal attached to a project</label><br/>
                        <select name="prior" >
                        <option value="New York High Rise">New York High Rise</option>
                        <option value="CA medium Rise">CA medium Rise</option>
                        <option value="Maxico low Rise">Maxico low Rise</option>
                    </select>

                    </div>
                    <div className="go">
                        <lable style={{"marginTop":"-25%"}}>who else can view this task</lable>
                        <br/>
                        <input type="text" pattern="Luka bride" style={{"width":"100%","marginTop":"-30%"}}/>

                    </div>


                  </div>
                  <div className="des">
                    <h2>Description</h2><br/>
                    <textarea rows="6">Conduct extension research to gather inspiration from various source. 
                    This research can include studying historical precendent,exploring Architectual trends and seeing innovation design solutons,based
                    the information gathered from client,site analysis, and research ,senior architects begin the process of development design Concept.
                    this is the fountational idea that will guide the entire project.this and firm's design phillosphy.
                    </textarea>

                  </div>
                  <div className="btn">
                    <button type="black" id="b1">Cancel</button>
                    &nbsp;
                    <button id="b2">save</button>

                  </div>

                </form>
             </div>       
    )
}
export default Home
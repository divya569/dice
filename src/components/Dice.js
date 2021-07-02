import React from 'react'
import download from './download.png'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img6 from './img6.jpg'
//import Demo from './DemoDice'
class Dice extends React.Component{
    constructor(props){
        super(props)
        this.state={
            draws:0,
            wins:0,
            lost:0,
            game:0,
            start:<h1>Start Game!</h1>
        }
    }
    clickHandler=()=>{ 
            var img=[]
            img[1]=<img style={{height:"100px"}} src={img1} alt="img1" className="img"/>
            img[2]=<img style={{height:"100px"}} src={img2} alt="img2"className="img"/>
            img[3]=<img style={{height:"100px"}} src={img3} alt="img3"className="img"/>
            img[4]=<img style={{height:"100px"}} src={img4} alt="img4"className="img"/>
            img[5]=<img  style={{height:"100px"}}src={img5} alt="img5"className="img"/>
            img[6]=<img style={{height:"100px"}} src={img6} alt="img6"className="img"/>
    
        this.setState({
            yourDice:(Math.floor(Math.random()*6)+1),
            ComputerDice:(Math.floor(Math.random()*6)+1)},
            ()=>{
                this.setState({start:null})
                this.setState({you:"you:",computer:"computer:"})
                this.setState({ yourDiceImg:img[this.state.yourDice] })
            this.setState({ComputerDiceImg:img[this.state.ComputerDice]})
            this.setState({game:this.state.game+1})
        if(this.state.yourDice===null||this.state.ComputerDice==null){
            this.setState({
                count3:null
            })
        }
       else  if(this.state.yourDice===this.state.ComputerDice){
            this.setState({
               draws:this.state.draws+1,
               msg:<h3 className="result1">Draw</h3>
            })
        }
         else if(this.state.yourDice>this.state.ComputerDice){
            this.setState({
                wins:this.state.wins+1,
                msg:<h3  className="result2">You Won!</h3>
             })
        }
    
        else{
            this.setState({
                lost:this.state.lost+1,
                msg:<h3  className="result3">You Lost!</h3>
             })
    }
  }
 )
}
Clear=()=>{
    this.setState({
      wins:0,
      lost:0,
      draws:0,
      yourDice:null,
      ComputerDice:null,
      msg:null,
      yourDiceImg:null,
      ComputerDiceImg:null,
      game:0,
      you:null,
      computer:null,
      start:<h1>Start Game!</h1>
    })
  }
    render(){
        return(
         <div>
           <div><img style={{height:"200px",marginTop:"40px",cursor:"pointer"}} src={download} alt={download} onClick={this.clickHandler}/>
           <span>  <button style={{backgroundColor:'#e65656',color:'white',buttonRadius:'20',cursor:'pointer'}} onClick={this.Clear}>Clear</button></span>
           </div>
         <h3 className='hi'><span>You : {this.state.yourDice}</span>
           <span>    Computer : {this.state.ComputerDice}</span></h3>
         <h5> Game : {this.state.game}</h5>
         {this.state.start}
           <span style={{marginRight:"400px"}}>{this.state.you}{this.state.yourDiceImg}</span>
           <span>{this.state.computer}{this.state.ComputerDiceImg}</span>
           <h3>  {this.state.msg}</h3>
           <h4>Wins : {this.state.wins}
            <span>  Losses : {this.state.lost}</span>
            <span>  Draws : {this.state.draws}</span></h4>
            </div>
        )
    }
}
export default Dice

import {Button,Container,OverlayTrigger,Tooltip} from 'react-bootstrap';
import {useState} from 'react';

export default (props) => {

    const myTooltip = (text) => <Tooltip >{text}</Tooltip>
    return(<>
        <Button variant="link" onClick={()=>props.animation(props.tabID)} style={{color: 'darkslateblue',fontSize: '25px'}}>Skills</Button>
        <Container style={props.show?{display:'inherit',background:'none',border:'none'}:{display:'none',background:'none'}}>
            <div>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('Javascript')}>    
                    <img className='skilsIcon' src='/img/javascript-js-seeklogo.com.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('Bootstrap')}>
                    <img className='skilsIcon' src='/img/bootstrap-seeklogo.com.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('Node.js')}>
                    <img className='skilsIcon' src='/img/nodejs-seeklogo.com.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('MS SQL database')}>
                    <img className='skilsIcon' src='/img/microsoft-sql-server-seeklogo.com.svg'/>
                </OverlayTrigger>
            </div>
            <div>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('MySQL')}>
                    <img className='skilsIcon' src='/img/mysql-5.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('HTML')}>
                    <img className='skilsIcon' src='/img/html5-2.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('CSS')}>
                    <img className='skilsIcon' style={{width:'100px'}} src='/img/css-5.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top" 
                overlay={myTooltip('Heroku')}>
                    <img className='skilsIcon' src='/img/heroku.svg'/>
                </OverlayTrigger>
            </div>
            <div>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('Tableau')}>
                    <img className='skilsIcon' src='/img/tableau-software.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('React')}>
                    <img className='skilsIcon' src='/img/react-seeklogo.com.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('npm')}>
                    <img className='skilsIcon' style={{width:'100px'}} src='/img/npm-node-package-manager.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top" 
                overlay={myTooltip('jQuery')}>
                    <img className='skilsIcon' src='/img/jquery-seeklogo.com.svg'/>
                </OverlayTrigger>
            </div>
            <div>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('MongoDB')}>
                    <img className='skilsIcon' src='/img/mongodb.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('git')}>
                    <img className='skilsIcon' src='/img/git-icon.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top"
                overlay={myTooltip('python')}>
                    <img className='skilsIcon' style={{width:'100px'}} src='/img/python-5.svg'/>
                </OverlayTrigger>
                <OverlayTrigger 
                placement="top" 
                overlay={myTooltip('java')}>
                    <img className='skilsIcon' src='/img/java-14.svg'/>
                </OverlayTrigger>
            </div>
        </Container>
    </>)
}
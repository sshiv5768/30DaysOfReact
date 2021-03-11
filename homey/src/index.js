import React from 'react';
import ReactDOM from 'react-dom';
import {jsPDF} from 'jspdf';

const htmltopdf = e =>{
    e.preventDefault()
    let doc = new jsPDF('landscape', 'pt', 'A4');
    doc.html(document.getElementById('form'), {
        callback: () =>{
            doc.save('test.pdf');
        }
    });
}
const element = (
    
    <form action='#'method='GET' id='form'>
        <label>Buyer's name: </label>
        <input type='text' name='bname'></input>
        <br></br>
        <label>Supplier's name: </label>
        <input type='text' name='sname'></input>
        <br></br>
        <label>Quality</label>
        <input type='text' name='quality'></input>
        <br></br>
        <label>Rate:</label>
        <input type='text' name='rate'></input>
        <br></br>
        <label>Payment Terms</label>
        <input type='text' name='payday'></input>
        <br></br>
        <label>Deliver Time</label>
        <input type='text' name='day'></input>
        <br></br>
        <label>Transport name</label>
        <input type='text' name='tname'></input>
        <br></br>
        <label>Remark</label>
        <input type='text' name='remark'></input>
        <br></br>
        <button onClick={htmltopdf}>Submit</button>

    </form>

);


ReactDOM.render(element, document.getElementById('root'));

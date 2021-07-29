import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {  useFormik } from 'formik';
import {useDispatch} from 'react-redux'
import { addTraining } from '../actions';


const initialValues = {
    date: '',
    type: '',
    distance: '',
    comment: ''
}



const validate = val => {

    let errors = {}

    if(!val.date) {
        errors.date = 'Required'
    }
    if(!val.type) {
        errors.type = 'Required'
    }
    if(!val.distance) {
        errors.distance = 'Required'
    }
    return errors
}


const ModalWindow = (props) => {
    const dispatch = useDispatch();
    const onSubmit = values => {
        dispatch(addTraining(formik.values))
    }

const formik = useFormik({
    initialValues,
    onSubmit,
    validate
})



  return (
    <div>
      <Modal isOpen={props.isOpen} toggle={props.toggle} >
        <ModalHeader toggle={props.toggle}>Add your training</ModalHeader>
        <ModalBody>
    <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" name="date" onChange={formik.handleChange} value={formik.values.date} />
            {formik.errors.date ? <div className="error">{formik.errors.date}</div> : null }
        </div>
        <div className="form-group"> 
            <label htmlFor="type">Type:</label>
            <input type="text" name="type" onChange={formik.handleChange} value={formik.values.type}/>
            {formik.errors.type ? <div className="error">{formik.errors.type}</div> : null }
        </div>
        <div className="form-group"> 
            <label htmlFor="distance">Distance:</label>
            <input type="text" name="distance" onChange={formik.handleChange} value={formik.values.distance} />
            {formik.errors.distance ? <div className="error">{formik.errors.distance}</div> : null }
        </div>
        <div className="form-group"> 
            <label htmlFor="comment">Comment:</label>
           <textarea name="comment" id="comment" cols="30" rows="7" name="comment" onChange={formik.handleChange} value={formik.values.comment}></textarea> 
          
        </div>
        <Button type="submit" color="success" style={{margin: '0 auto'}}>Add</Button>
    </form>
        </ModalBody>
    
      </Modal>
    </div>
  );
}

export default ModalWindow;
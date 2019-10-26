import React from 'react'
import { Field, reduxForm, reset } from 'redux-form';
import DatePicker, { FieldDatePicker, formatDates, normalizeDates } from '../DatePicker';
import { addFlight }  from '../../actions/contentActions';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'


const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
      return
    } else {
      return <FormHelperText>{touched && error}</FormHelperText>
    }
  }

const renderSelectField = ({
    input,
    label,
    meta: { touched, error },
    children,
    ...custom
  }) => (
    <FormControl error={touched && error}  className="col-sm-6 col-xs-12">
      <InputLabel htmlFor="age-native-simple">{label}</InputLabel>
      <Select
        native
        {...input}
        {...custom}
      >
        {children}
      </Select>
      {renderFromHelper({ touched, error })}
    </FormControl>
  )

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  }) => (
    <TextField
      className="col-sm-3 col-xs-4"
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <div className="container">
        <div className="row">
            <div class="col-12">
                <h5 class="card-title margin-top-twenty">Add a Flight:</h5>
            </div>
        </div>

        <form className="row" onSubmit={handleSubmit}>
            <div class="col-12">
                <FieldDatePicker name="departure" placeholder="Start Date" />
                <Field name={'arrival'} component={DatePicker} placeholder="End Date" parse={normalizeDates} format={formatDates} />
            </div>

            <div className="col-12 margin-top-twenty">
                <Field
                    name="type"
                    component={renderSelectField}
                    label="What is the flight Type?"
                >
                    <option value={'business'}>Business</option>
                    <option value={'cheap'}>Cheap</option>
                </Field>
            </div>

            <div className="col-12">
              <Field
                  name="from"
                  component={renderTextField}
                  label="From city"
              />
                    
              <Field
                name="to"
                component={renderTextField}
                label="To city"
              />
            </div>

            <div className='col-12 margin-top-twenty'>       
                <ul class="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <button className={`nav-link active`} type="submit">Submit</button>
                    </li>
                </ul>
            </div>
        </form>       
    </div>
  )
}

const submit = (values, dispatch) => dispatch(addFlight(values));
const afterSubmit = (result, dispatch) => dispatch(reset('contact'));

ContactForm = reduxForm({
  form: 'contact',
  onSubmit: submit,
  onSubmitSuccess: afterSubmit,
})(ContactForm)

export default ContactForm
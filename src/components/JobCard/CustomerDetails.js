import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import CustomSelect from '../../common/CustomSelect';
import ActionButtons from '../../common/actionButtons';
import { connect } from 'react-redux';
import * as ClientActions from '../../actions/ClientActions';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core';
import {
  ObjectGeneratorForCustomSelect,
  GetBeforeUnderscore,
  GetAfterUnderscore, themeStyler,
} from '../../helper/helper';
import JobDetailsHeader from '../../common/JobDetailsHeader';

const useStyle = makeStyles(theme => themeStyler(theme));


const ClientDiv = ({
                     title,
                     client,
                     classes,
                     module,
                     submit,
                     handleChange,
                     selectOption,
                     editFlag,
                     setEditFlag,
                     jobDetails
                   }) => {
  return (
    <div>

      <div>
        <div className={classes.headerTitle}>
          <span className={classes.subHeaderStyle}>{title}</span>

          {
            editFlag && <Button className={classes.buttonStyle} onClick={() => setEditFlag(false)} color="inherit" size="medium" variant="outlined">
              <CreateIcon className={classes.iconStyle}/>Edit
            </Button>
          }
        </div>
        <form action="">
          <div className={classes.spaceBetween}>
            <TextField
              className={`${classes.gridWrapper} sz-30`}
              label="First Name"
              name={`${module}_first_name`}
              value={client.first_name}
              disabled={editFlag}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Last Name"
              className={`${classes.gridWrapper} sz-30`}
              name={`${module}_last_name`}
              value={client.last_name}
              disabled={editFlag}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            <div className={`${classes.gridWrapper} sz-30`}>
              <CustomSelect
                label="Type"
                name="client_type"
                options={jobDetails.all_client_types}
                selected={ObjectGeneratorForCustomSelect(client.client_type)}
                selectAction={selectOption}
              />
            </div>
          </div>
          <div>
            <TextField
              label="Address"
              name={`${module}_address`}
              value={client.address}
              disabled={editFlag}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className={classes.spaceBetween}>
            <TextField
              label="Phone"
              className={`${classes.gridWrapper} sz-30`}
              name={`${module}_phone`}
              value={client.phone}
              disabled={editFlag}
              onChange={handleChange}
              margin="normal"
              type="tel"
              variant="outlined"
            />
            <TextField
              label="Mobile"
              name={`${module}_mobile`}
              className={`${classes.gridWrapper} sz-30`}
              value={client.mobile}
              disabled={editFlag}
              onChange={handleChange}
              margin="normal"
              type="tel"
              variant="outlined"
            />
            <TextField
              label="Email"
              name={`${module}_email`}
              className={`${classes.gridWrapper} sz-30`}
              value={client.email}
              disabled={editFlag}
              onChange={handleChange}
              margin="normal"
              type="email"
              variant="outlined"
            />
          </div>
          {
            !editFlag && <ActionButtons onCancel={() => setEditFlag(true)} onSave={submit}/>
          }
        </form>
      </div>
    </div>);
};

const CustomerDetails = ({ jobDetails, clientActions }) => {
  const classes = useStyle();

  const [form, setForm] = useState(jobDetails);
  const [clientEditFlag, setClientEditFlag] = useState(true);
  const [billingEditFlag, setBillingEditFlag] = useState(true);
  useEffect(() => {
  }, []);

  const handleChange = (e) => {
    e.persist();
    setForm(currentForm => {
      let clone = Object.assign({}, currentForm);
      // Separating the module name 'client'/'mailing' from the assigned name
      clone[GetBeforeUnderscore(e.target.name)][GetAfterUnderscore(e.target.name)] = e.target.value;
      return clone;
    });
  };

  /**
   * Function to handle the select option changes
   * @param event
   */
  const selectOption = (event) => {
    setForm(currentForm => Object.assign({}, currentForm, { [event.target.name]: event.target.value }));
  };

  const clientSubmit = () => {
    clientActions.editClients(form);
    setClientEditFlag(true);
  };

  const mailingSubmit = () => {
    clientActions.editMailingClients(form);
    setBillingEditFlag(true);
  };

  return (
    <div className="p-l-24 p-r-24 p-t-12 p-b-12">
      <JobDetailsHeader classes={classes}/>

      <ClientDiv handleChange={handleChange}
                 module="client"
                 client={jobDetails.client}
                 title="Client Information"
                 classes={classes}
                 jobDetails={jobDetails}
                 submit={clientSubmit} selectOption={selectOption} editFlag={clientEditFlag} setEditFlag={setClientEditFlag}/>
      <Divider/>
      <ClientDiv handleChange={handleChange}
                 module="mailing"
                 client={jobDetails.mailing}
                 title="Billing Information"
                 classes={classes}
                 jobDetails={jobDetails}
                 submit={mailingSubmit} selectOption={selectOption} editFlag={billingEditFlag} setEditFlag={setBillingEditFlag}/>

    </div>
  );
};


export default connect(state => ({
  jobDetails: state.jobDetails.data,
}), dispatch => ({
  clientActions: bindActionCreators(ClientActions, dispatch)
}))(CustomerDetails);

import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Col, Select, DatePicker, message } from 'antd';
import { register } from '../../../actions/trabahero.actions';

const FormItem = Form.Item;
const Option = Select.Option;

let formData = new FormData();

class PreRegistrationFormPage extends Component {
  constructor(props) {
    super(props)
    this.props = props;
    this.state = {
      firstname: null,
      lastname: null,
      middlename: null,
      birthdate: null,
      phonenumber: null,
      email: null,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeDatePicker = (date, dateString) => {
    this.setState({
      birthdate: dateString
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        formData.append('trabahero[firstname]', this.state.firstname);
        formData.append('trabahero[lastname]', this.state.lastname);
        formData.append('trabahero[middlename]', this.state.middlename);
        formData.append('trabahero[birthdate]', this.state.birthdate);
        formData.append('trabahero[phonenumber]', this.state.phonenumber);
        formData.append('trabahero[email]', this.state.email);

        const hide = message.loading('Action in progress..', 0);
        this.props.registerTrabahero(formData)
          .then(response => {
            this.props.trabaheroCreated(response.data);
            setTimeout(hide, 0);
            message.success('Successfully Pre-register!', 1.5, () => {
              this.props.history.push('/pre-registration/thank-you');
            });
          })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '63',
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
      </Select>
    );

    return(
      <div>
        <h1>Register as TrabaHero { this.props.trabahero.msg }</h1>

        <Form onSubmit={ this.handleSubmit }>
          <FormItem
            { ...formItemLayout }
            label="First name"
          >
          { getFieldDecorator('firstName', {
            rules: [{
              required: true, message: 'Please input first name.'
            }]
          })(
            <Input onChange={ this.onChange } placeholder="First name" name="firstname"/>
          )}
          </FormItem>

          <FormItem
            { ...formItemLayout }
            label="Middle name"
          >
          { getFieldDecorator('middleName', {
            rules: [{
              required: true, message: 'Please input middle name.'
            }]
          })(
            <Input onChange={ this.onChange } placeholder="Middle name" name="middlename"/>
          )}
          </FormItem>

          <FormItem
            { ...formItemLayout }
            label="Last name"
          >
          { getFieldDecorator('lastName', {
            rules: [{
              required: true, message: 'Please input last name.'
            }]
          })(
            <Input onChange={ this.onChange } placeholder="Last name" name="lastname"/>
          )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Email"
          >
          { getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail.',
            },
            { required: true, message: 'Please input email.' }
          ],
          })(
            <Input onChange={ this.onChange } placeholder="Email" name="email"/>
          )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Birthdate"
          >
          { getFieldDecorator('birthdate', {
            rules: [{ required: true, message: 'Please input birthdate.' }],
          })(
            <DatePicker onChange={ this.onChangeDatePicker } placeholder="Birthdate" name="birthdate"/>
          )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="Phone Number"
          >
          { getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input phone number.' }],
          })(
            <Input onChange={ this.onChange } addonBefore={prefixSelector} style={{ width: '100%' }} name="phonenumber"/>
          )}
          </FormItem>

          <FormItem {...tailFormItemLayout}>
            <Button type="primary" size="large" htmlType="submit">Register</Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

const WrappedPreRegistrationFormPage = Form.create()(PreRegistrationFormPage)
export default WrappedPreRegistrationFormPage;

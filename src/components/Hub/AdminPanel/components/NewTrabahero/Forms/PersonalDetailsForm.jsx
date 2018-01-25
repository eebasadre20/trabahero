import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Form, Icon, Input, Button, Checkbox, Select, DatePicker, message, Col, Row, Divider, Upload } from 'antd';
import './PersonalInformation.css';

const FormItem = Form.Item;
const Option = Select.Option;

class PersonalDetailsForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.history.push('/hub/new/trabahero/1/skill');
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 6,
          offset: 18,
        },
      },
    };

    const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '63',
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
      </Select>
    );

    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Row gutter={ 16 }>
          <h1>Personal Information </h1>
          <Col span={ 8 }>
            <FormItem
              label="First name"
            >
            <Col span={ 16 }>
            { getFieldDecorator('firstName', {
              rules: [{
                required: true, message: 'Please input first name.'
              }]
            })(
              <Input onChange={ this.onChange } placeholder="First name" name="firstname" size="large"/>
            )}
            </Col>
            </FormItem>

            <FormItem
              label="Middle name"
            >
            <Col span={ 16 }>
              { getFieldDecorator('middleName', {
                rules: [{
                  required: true, message: 'Please input middle name.'
                }]
              })(
                <Input onChange={ this.onChange } placeholder="Middle name" name="middlename" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Last name"
            >
            <Col span={ 16 }>
              { getFieldDecorator('lastName', {
                rules: [{
                  required: true, message: 'Please input last name.'
                }]
              })(
                <Input onChange={ this.onChange } placeholder="Last name" name="lastname" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Email"
            >
            <Col span={ 16 }>
              { getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'The input is not valid E-mail.',
                },
                { required: true, message: 'Please input email.' }
              ],
              })(
                <Input onChange={ this.onChange } placeholder="Email" name="email" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Birthdate"
            >
            <Col span={ 16 }>
              { getFieldDecorator('birthdate', {
                rules: [{ required: true, message: 'Please input birthdate.' }],
              })(
                <DatePicker onChange={ this.onChangeDatePicker } placeholder="Birthdate" name="birthdate" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Phone Number"
            >
            <Col span={ 16 }>
              { getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Please input phone number.' }],
              })(
                <Input onChange={ this.onChange } addonBefore={prefixSelector} style={{ width: '100%' }} name="phonenumber" size="large"/>
              )}
            </Col>
            </FormItem>

          </Col>

          <Col span={ 8 }>
            <FormItem
              label="House number and Street Address"
            >
            <Col span={ 16 }>
              { getFieldDecorator('house_and_street_address', {
                rules: [{ required: true, message: 'Please input House number and Street Address.' }],
              })(
                <Input onChange={ this.onChange } placeholder="House number and Street Address" name="house_number_and_street" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Barangay"
            >
            <Col span={ 16 }>
              { getFieldDecorator('barangay', {
                rules: [{ required: true, message: 'Please choose your barangay.' }],
              })(
                <Select placeholder="Select Barangay" size="large">
                  <Option value="Barangay 15">Barangay 15</Option>
                  <Option value="Barangay 16">Barangay 16</Option>
                  <Option value="Barangay 17">Barangay 17</Option>
                </Select>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="City"
            >
            <Col span={ 16 }>
              { getFieldDecorator('city', {
                rules: [{ required: true, message: 'Please choose your city.' }],
              })(
                <Select placeholder="Select City" size="large">
                  <Option value="Cagayan de Oro City">Cagayan de Oro City</Option>
                  <Option value="Davao City">Davao City</Option>
                  <Option value="Malaybalay City">Malaybalay City</Option>
                </Select>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Postal Code"
            >
            <Col span={ 16 }>
              { getFieldDecorator('postal_code', {
                rules: [{ required: true, message: 'Please input your postal code.' }],
              })(
                <Input onChange={ this.onChange } placeholder="Postal Code" name="postal_code" size="large"/>
              )}
            </Col>
            </FormItem>

            <FormItem
              label="Province / State"
            >
            <Col span={ 16 }>
              { getFieldDecorator('province', {
                rules: [{ required: true, message: 'Please choose your province.' }],
              })(
                <Select placeholder="Select Province" size="large">
                  <Option value="Misamis Oriental">Misamis Oriental</Option>
                  <Option value="Davao del Sur">Davao del Sur</Option>
                  <Option value="Misamis Occidental">Misamis Occidental</Option>
                </Select>
              )}
            </Col>
            </FormItem>
          </Col>
          
          <Col span={ 8 }>
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader  "
            showUploadList={false}
            action="//jsonplaceholder.typicode.com/posts/"
          >
           { uploadButton }
          </Upload>
          </Col>
        </Row>

        <Row>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" size="large" htmlType="submit">Submit</Button>
          </FormItem>
        </Row>
      </Form>
    );
  }
}

const WrappedPersonalDetailsForm = Form.create()(PersonalDetailsForm)
export default withRouter(WrappedPersonalDetailsForm);
